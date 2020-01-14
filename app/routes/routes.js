import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { VideoDetailPage, VideoPlayPage, SelectedPage } from '../pages/selected'
import { Login, ProfilePage, LoginPrev } from '../pages/profile'
import { FollowPage } from '../pages/follow'
import { ExplorePage } from '../pages/explore'

import { ratio, checkSource } from '../utils'

// import Test from '../pages/Test'

const TabStack = createBottomTabNavigator(
  {
    SelectedPage: {
      screen: SelectedPage,
      navigationOptions: () => ({
        tabBarLabel: '精选',
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (
              <Image {...checkSource(require('../imgs/ic_tab_strip_icon_feed_selected.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
            )
          }
          return (
            <Image {...checkSource(require('../imgs/ic_tab_strip_icon_feed.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
          )
        }
      })
    },
    ExplorePage: {
      screen: ExplorePage,
      navigationOptions: () => ({
        tabBarLabel: '发现',
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (
              <Image {...checkSource(require('../imgs/ic_tab_strip_icon_category_selected.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
            )
          }
          return (
            <Image {...checkSource(require('../imgs/ic_tab_strip_icon_category.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
          )
        }
      })
    },
    FollowPage: {
      screen: FollowPage,
      navigationOptions: () => ({
        tabBarLabel: '关注',
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (
              <Image {...checkSource(require('../imgs/ic_tab_strip_icon_follow_selected.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
            )
          }
          return (
            <Image {...checkSource(require('../imgs/ic_tab_strip_icon_follow.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
          )
        }
      })
    },
    ProfilePage: {
      screen: ProfilePage,
      navigationOptions: () => ({
        tabBarLabel: '我的',
        tabBarIcon: ({ focused }) => {
          if (focused) {
            return (
              <Image {...checkSource(require('../imgs/ic_tab_strip_icon_profile_selected.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
            )
          }
          return (
            <Image {...checkSource(require('../imgs/ic_tab_strip_icon_profile.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
          )
        }
      })
    }
  },
  {
    initialRouteName: 'SelectedPage',
    tabBarOptions: {
      activeTintColor: '#03C2A6',
      inactiveTintColor: '#999',
      showIcon: true,
      labelStyle: {
        fontSize: 12
      },
      style: {
        height: 50,
        backgroundColor: '#fff',
        paddingBottom: 3,
        paddingTop: 0,
        borderTopWidth: 0.5 / ratio,
        borderTopColor: '#ededed'
      }
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    MainPage: {
      screen: TabStack,
      navigationOptions: () => ({
        header: null
      })
    },
    VideoDetailPage,
    VideoPlayPage: {
      screen: VideoPlayPage,
      navigationOptions: () => ({
        header: null
      })
    },
    Login: {
      screen: Login,
      navigationOptions: {
        title: '登录'
      }
    },
    ProfilePage,
    LoginPrev
  },
  {
    initialRouteName: 'MainPage'
  }
)

export default createAppContainer(AppNavigator)
