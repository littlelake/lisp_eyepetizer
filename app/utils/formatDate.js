function formatDate (timestr, fmt) {
  const date = new Date(timestr)
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length))
  }
  const o = {
    'M+': date.getMonth() + 1,
    'd+': date.getDate(),
    'h+': date.getHours(),
    'm+': date.getMinutes(),
    's+': date.getSeconds()
  }
  for (const k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      const str = o[k] + ''
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str))
    }
  }
  return fmt
};

function padLeftZero (str) {
  return ('00' + str).substr(str.length)
}
function transferTime (date) {
  if (date === null) {
    return ''
  }
  const timeDiffer = ((new Date().getTime() - date) / (3600 * 1000))
  if (timeDiffer <= 1) {
    date = '刚刚'
  } else if (timeDiffer > 1 && timeDiffer <= 2) {
    date = '1小时前'
  } else if (timeDiffer > 2 && timeDiffer < 24) {
    date = `${Math.round(timeDiffer)}小时前`
  } else if (timeDiffer >= 24 && timeDiffer <= 48) {
    date = '昨天'
  } else if (timeDiffer > 48) {
    date = formatDate(date, 'M月d日')
  }
  return date
}
function transferPlayerTime (currentTime) {
  let m = Math.floor((currentTime || 0) / 60).toString()
  let s = Math.floor((currentTime || 0) % 60).toString()
  m = (m.length === 1) ? `0${m}` : m
  s = (s.length === 1) ? `0${s}` : s
  return `${m}:${s}`
}

function formatVersion (str) {
  var arr = str.split('.')
  var val = ''
  for (var i = 0; i < arr.length; i++) {
    val += String(arr[i])
  }
  return Number(val)
}

export { formatDate, transferTime, transferPlayerTime, formatVersion }
