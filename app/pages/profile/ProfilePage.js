import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, TouchableOpacity, ScrollView } from 'react-native'

import { observer, inject } from 'mobx-react'
import { ratio } from '../../utils'

/**
 * 个人中心，头像，昵称部分
 */
@inject('themeStore')
@observer class Head extends Component {
  render () {
    return (
      <View style={styles.container}>
        <View style={{ alignItems: 'flex-end' }}>
          <TouchableWithoutFeedback onPress={this.props.handleSettings}>
            <Image source={require('../../imgs/ic_menu_more.png')} style={styles.btn_setting} />
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.container_avater}>
          <TouchableWithoutFeedback onPress={this.props.handleAvatar}>
            <Image source={require('../../imgs/avatar.png')} style={styles.avatar} />
          </TouchableWithoutFeedback>
          <TouchableOpacity activeOpacity={0.6}>
            <Text>Lisp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_favority_and_reply}>
          <TouchableWithoutFeedback onPress={this.props.handleFavority}>
            <View style={styles.container_favority}>
              <Image source={require('../../imgs/ic_action_favorites_grey.png')} style={styles.img} />
              <Text style={styles.tv_favority}>收藏</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.props.handleReply}>
            <View style={styles.container_reply}>
              <Image source={require('../../imgs/ic_action_reply_grey.png')} style={styles.img} />
              <Text style={styles.tv_reply}>评论</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    )
  }
}

const MYITEM = ['MyMessage', 'MyFollow', 'MyCache', 'Feedback', 'Contribute']

/**
 * 个人中心【我的**】item布局
 */
class MyItem extends Component {
  render () {
    const { tag, title, onPress } = this.props
    return (
      <TouchableOpacity activeOpacity={0.6} style={styles.tv_item} onPress={onPress}>
        <Text
          tag={tag}
          style={{ fontSize: 17, fontWeight: '400' }}
        >{title}
        </Text>
      </TouchableOpacity>
    )
  }
}

class ProfilePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }

  render () {
    return (
      <View style={{ flex: 1 }}>
        <Head
          handleSettings={() => this.handleSettings()}
          handleAvatar={() => this.handleAvatar()}
          handleFavority={() => this.handleFavority()}
          handleReply={() => this.handleReply()}
        />
        <ScrollView showsVerticalScrollIndicator={false}>
          <MyItem title='我的消息' onPress={() => this._onItemClick(MYITEM[0])} />
          <MyItem title='我的关注' onPress={() => this._onItemClick(MYITEM[1])} />
          <MyItem title='我的缓存' onPress={() => this._onItemClick(MYITEM[2])} />
          <MyItem title='意见反馈' onPress={() => this._onItemClick(MYITEM[3])} />
          <MyItem title='我要投稿' onPress={() => this._onItemClick(MYITEM[4])} />
        </ScrollView>
      </View>
    )
  }

  componentDidMount () {
    const { themeMode } = this.props.themeStore
    console.log(themeMode)
  }

  _onItemClick = (tag) => {
    // 跳转到登录页面
    const { navigate } = this.props.navigation
    navigate('Login')
  }

  // 设置
  handleSettings = () => { console.log('settings') }

  // 头像
  handleAvatar = () => { console.log('avatar') }

  // 收藏
  handleFavority = () => { console.log('favority') }

  // 评论
  handleReply = () => { console.log('reply') }
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 20,
    borderBottomWidth: 1 / ratio,
    borderBottomColor: '#b5b5b5',
    backgroundColor: '#fff'
  },
  container_favority_and_reply: {
    flexDirection: 'row'
  },
  container_favority: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRightWidth: 1 / ratio,
    borderRightColor: '#b5b5b5'
  },
  container_reply: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  container_avater: {
    alignItems: 'center',
    marginBottom: 32
  },
  btn_setting: {
    width: 40,
    height: 40
  },
  avatar: {
    marginBottom: 16,
    width: 80,
    height: 80,
    borderRadius: 80,
    overflow: 'hidden'
  },
  tv_favority: {
    color: '#888'
  },
  tv_reply: {
    color: '#888'
  },
  img: {
    marginRight: 8,
    width: 20,
    height: 20,
    resizeMode: 'contain'
  },
  tv_item: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  }
})

export default ProfilePage
