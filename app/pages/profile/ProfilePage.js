import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback, Image, TouchableOpacity, ScrollView } from 'react-native'

import { observer, inject } from 'mobx-react'
import { ratio } from '../../utils'

/**
 * 个人中心，头像，昵称部分
 */
@inject('themeStore')
@observer
class Head extends Component {
  render () {
    const { themeMode } = this.props.themeStore
    return (
      <View style={[styles.container, { backgroundColor: themeMode.rowItemBackgroundColor }]}>
        <View style={{ alignItems: 'flex-end', marginTop: 15, marginRight: 15 }}>
          <TouchableOpacity onPress={this.props.handleSettings} activeOpacity={0.6}>
            <Image source={require('../../imgs/settings.png')} style={styles.btn_setting} tintColor={themeMode.arrowColor} />
          </TouchableOpacity>
        </View>
        <View style={styles.container_avater}>
          <TouchableWithoutFeedback onPress={this.props.handleAvatar}>
            <Image source={require('../../imgs/avatar.png')} style={styles.avatar} />
          </TouchableWithoutFeedback>
          <TouchableOpacity activeOpacity={0.6}>
            <Text style={{ color: themeMode.titleColor }}>Lisp</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.container_favority_and_reply}>
          <TouchableWithoutFeedback onPress={this.props.handleFavority}>
            <View style={styles.container_favority}>
              <Image source={require('../../imgs/ic_action_favorites_grey.png')} style={styles.img} />
              <Text style={[styles.tv_favority, { color: themeMode.subTitleColor }]}>收藏</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={this.props.handleReply}>
            <View style={styles.container_reply}>
              <Image source={require('../../imgs/ic_action_reply_grey.png')} style={styles.img} />
              <Text style={[styles.tv_reply, { color: themeMode.subTitleColor }]}>评论</Text>
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
@inject('themeStore')
@observer
class MyItem extends Component {
  render () {
    const { themeMode } = this.props.themeStore
    const { tag, title, onPress } = this.props
    return (
      <TouchableOpacity activeOpacity={0.6} style={styles.tv_item} onPress={onPress}>
        <Text
          tag={tag}
          style={{ fontSize: 17, fontWeight: '400', color: themeMode.titleColor }}
        >{title}
        </Text>
      </TouchableOpacity>
    )
  }
}

@inject('themeStore')
@observer
class ProfilePage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLogin: false
    }
  }

  render () {
    const { themeMode } = this.props.themeStore
    return (
      <View style={{ flex: 1, backgroundColor: themeMode.pageBackgroundColor }}>
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
    console.log(this.props.themeStore)
  }

  _onItemClick = (tag) => {
    // 跳转到登录页面
    const { navigate } = this.props.navigation
    navigate(tag)
  }

  // 设置
  handleSettings = () => {
    const { navigate } = this.props.navigation
    navigate('Settings')
  }

  // 头像
  handleAvatar = () => { this.props.navigation.navigate('Login') }

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
    width: 22,
    height: 22
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
