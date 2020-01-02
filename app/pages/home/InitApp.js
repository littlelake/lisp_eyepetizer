import React, { Component } from 'react'
import { View, Text, BackHandler, ToastAndroid } from 'react-native'

class InitApp extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <View>
        <Text>123132</Text>
      </View>
    )
  }

  componentDidMount () {
    BackHandler.addEventListener('hardwareBackPress', this.onBackAndroid)
  }

  componentWillUnmount () {
    BackHandler.removeEventListener('hardwareBackPress', this.onBackAndroid)
  }

  onBackAndroid = () => {
    const { state } = this.props.navigation
    if (state.routeName === 'Home') {
      if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
        BackHandler.exitApp()
        return false
      }
      this.lastBackPressed = Date.now()
      ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT)
      // ToastAndroid.showWithGravity('再按一次退出应用', ToastAndroid.SHORT, ToastAndroid.CENTER)
      return true
    } else {
      return true
    }
  }
}

export default InitApp
