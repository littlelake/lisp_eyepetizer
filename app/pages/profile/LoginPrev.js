import React, { Component } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'

import { width } from '../../utils'

class LoginPrev extends Component {
  render () {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <TouchableOpacity activeOpacity={0.7}>
          <View style={styles.btn}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>一键登录</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.7} onPress={this.handlePasswordLogin}>
          <View style={[styles.btn, { backgroundColor: '#4FAAFF', marginTop: 20 }]}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>密码登录</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  handlePasswordLogin = () => {
    const { navigate } = this.props.navigation
    navigate('Login')
  }
}

const styles = StyleSheet.create({
  btn: {
    width: width - 40,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    lineHeight: 50,
    backgroundColor: '#32DDBF',
    borderRadius: 4,
    overflow: 'hidden'
  }
})

export default LoginPrev
