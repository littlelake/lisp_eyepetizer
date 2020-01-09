import { Dimensions, PixelRatio } from 'react-native'
import API from './api'
import axios from './axios'
import { formatDate, transferTime, transferPlayerTime, formatVersion } from './formatDate'

const { width, height } = Dimensions.get('window')
const ratio = PixelRatio.get()

const checkSource = (uri) => {
  return typeof uri === 'string' ? { source: { uri } } : { source: uri }
}

export {
  API,
  axios,
  width,
  height,
  formatDate, transferTime, transferPlayerTime, formatVersion,
  ratio,
  checkSource
}
