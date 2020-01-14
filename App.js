import React from 'react'
import { Alert } from 'react-native'
import Router from './app/routes/routes'

import CodePush from 'react-native-code-push'
import SplashScreen from 'react-native-splash-screen'
import { Provider } from 'mobx-react'

import store from './app/store'

const codePushOptions = {
  // 设置检查更新的频率
  // ON_APP_RESUME APP 恢复到前台的时候
  // ON_APP_START APP 开启的时候
  // MANUAL 手动检查
  checkFrequency: CodePush.CheckFrequency.ON_APP_RESUME,
  updateDialog: true,
  installMode: CodePush.InstallMode.IMMEDIATE
}

class App extends React.Component {
  render () {
    return (
      <Provider {...store}>
        <Router />
      </Provider>
    )
  }

  update = () => {
    const deploymentKey = 'OtFBbtYfgT-lSiAhWVx_-0OxWtYtLs_xmEyQX'
    CodePush.checkForUpdate(deploymentKey).then(update => {
      if (!update) {
        Alert.alert('提示', '已是最新版本', [
          {
            text: 'Ok',
            onPress: () => {
              console.log('点了OK')
            }
          }
        ])
      } else {
        CodePush.sync({
          // 安装模式
          // ON_NEXT_RESUME 下次恢复到前台时
          // ON_NEXT_RESTART 下一次重启时
          // IMMEDIATE 马上更新
          installMode: CodePush.InstallMode.IMMEDIATE,
          // 对话框
          updateDialog: {
            // 是否显示更新描述
            appendReleaseDescription: true,
            // 更新描述的前缀。 默认为"Description"
            descriptionPrefix: '更新内容：',
            // 强制更新按钮文字，默认为continue
            mandatoryContinueButtonLabel: '立即更新',
            // 强制更新时的信息. 默认为"An update is available that must be installed."
            mandatoryUpdateMessage: '必须更新后才能使用',
            // 非强制更新时，按钮文字,默认为"ignore"
            optionalIgnoreButtonLabel: '稍后',
            // 非强制更新时，确认按钮文字. 默认为"Install"
            optionalInstallButtonLabel: '后台更新',
            // 非强制更新时，检查到更新的消息文本
            optionalUpdateMessage: '有新版本了，是否更新？',
            // Alert窗口的标题
            title: '更新提示'
          }
        },
        (status) => {
          switch (status) {
            case CodePush.SyncStatus.DOWNLOADING_PACKAGE:
              console.log('DOWNLOADING_PACKAGE')
              break
            case CodePush.SyncStatus.INSTALLING_UPDATE:
              console.log(' INSTALLING_UPDATE')
              break
          }
        },
        (progress) => {
          console.log(progress.receivedBytes + ' of ' + progress.totalBytes + ' received.')
        })
      }
    })
  }

  async componentWillMount () {
    setTimeout(() => {
      SplashScreen.hide()
    }, 3000)
    // CodePush.disallowRestart() // 禁止重启
    // this.update() // 开始检查更新
  }

  componentDidMount () {
    // CodePush.allowRestart() // 在加载完了，允许重启
  }
}

App = CodePush(codePushOptions)(App)

export default App
