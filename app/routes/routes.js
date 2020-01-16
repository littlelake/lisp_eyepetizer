import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'

import { VideoDetailPage, VideoPlayPage, SelectedPage } from '../pages/selected'
import { Login, ProfilePage, LoginPrev, Settings, AboutUs, MyCache } from '../pages/profile'
import { FollowPage } from '../pages/follow'
import { ExplorePage } from '../pages/explore'

import { ratio, checkSource } from '../utils'
import themeStore from '../store/themeStore'

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
              <Image {...checkSource(require('../imgs/ic_tab_strip_icon_feed_selected.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} tintColor={themeStore.themeMode.arrowColor} />
            )
          }
          return (
            <Image {...checkSource(require('../imgs/ic_tab_strip_icon_feed.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} tintColor={themeStore.themeMode.arrowColor} />
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
              <Image {...checkSource(require('../imgs/ic_tab_strip_icon_category_selected.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} tintColor={themeStore.themeMode.arrowColor} />
            )
          }
          return (
            <Image {...checkSource(require('../imgs/ic_tab_strip_icon_category.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} tintColor={themeStore.themeMode.arrowColor} />
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
              <Image {...checkSource(require('../imgs/ic_tab_strip_icon_follow_selected.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} tintColor={themeStore.themeMode.arrowColor} />
            )
          }
          return (
            <Image {...checkSource(require('../imgs/ic_tab_strip_icon_follow.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} tintColor={themeStore.themeMode.arrowColor} />
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
              <Image {...checkSource(require('../imgs/ic_tab_strip_icon_profile_selected.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} tintColor={themeStore.themeMode.arrowColor} />
            )
          }
          return (
            <Image {...checkSource(require('../imgs/ic_tab_strip_icon_profile.png'))} style={{ width: 35, height: 35, resizeMode: 'contain' }} tintColor={themeStore.themeMode.arrowColor} />
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
        backgroundColor: themeStore.themeMode.pageBackgroundColor,
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
    LoginPrev,
    Settings: {
      screen: Settings,
      navigationOptions: {
        title: '设置'
      }
    },
    AboutUs: {
      screen: AboutUs,
      navigationOptions: {
        title: '关于我们'
      }
    },
    MyCache: {
      screen: MyCache,
      navigationOptions: {
        title: '缓存'
      }
    }
  },
  {
    initialRouteName: 'MainPage'
  }
)

export default createAppContainer(AppNavigator)
