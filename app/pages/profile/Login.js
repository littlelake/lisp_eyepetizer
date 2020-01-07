import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput, Image, ImageBackground, TouchableOpacity } from 'react-native'

import { width, height, ratio } from '../../utils'

class Login extends Component {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground source={require('../../imgs/login_bg.png')} resizeMode='cover' style={{ width, height }}>
          <View style={styles.subtitle}>
            <Text style={styles.txt}>登录后即可关注作者，</Text>
            <Text style={styles.txt}>发表评论，同步喜欢视频和播放记录</Text>
          </View>
          <View style={styles.form}>
            <View style={styles.form_group}>
              <Image source={require('../../imgs/ren.png')} style={styles.icon} />
              <TextInput
                placeholder='请输入邮箱地址/手机号'
                placeholderTextColor='#666'
                style={styles.text_input}
              />
            </View>
            <View style={styles.form_group}>
              <Image source={require('../../imgs/suo.png')} style={styles.icon} />
              <TextInput
                placeholder='请输入密码'
                placeholderTextColor='#666'
                autoComplete='password'
                style={styles.text_input}
              />
            </View>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.btn}>
                <Text style={{ fontSize: 20, fontWeight: '500', color: '#ededed' }}>登录</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  subtitle: {
    alignItems: 'center',
    marginTop: 140
  },
  txt: {
    fontSize: 18,
    color: '#fff'
  },
  form: {
    paddingHorizontal: 50,
    marginTop: 100
  },
  form_group: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    height: 60,
    borderBottomWidth: 1 / ratio,
    borderBottomColor: '#666'
  },
  icon: {
    width: 30,
    height: 30
  },
  text_input: {
    height: 60,
    fontSize: 16,
    borderWidth: 0
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    width: '100%',
    height: 50,
    lineHeight: 50,
    backgroundColor: 'rgba(0, 0, 0, .3)',
    borderRadius: 4,
    overflow: 'hidden'
  }
})

export default Login
