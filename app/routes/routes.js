import React from 'react'
import { Image } from 'react-native'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'

import { MainPage } from '../pages/home/index'
import { VideoDetailPage, VideoPlayPage, SelectedPage } from '../pages/selected'
import { Login, ProfilePage, LoginPrev } from '../pages/profile'
import { FollowPage } from '../pages/follow'
import { ExplorePage } from '../pages/explore'

import { ratio, checkSource } from '../utils'

// import Test from '../pages/Test'

const TabStack = createMaterialBottomTabNavigator(
  {
    SelectedPage: {
      screen: SelectedPage,
      navigationOptions: () => ({
        tabBarLabel: '精选'
      })
    },
    ExplorePage: {
      screen: ExplorePage,
      navigationOptions: () => ({
        tabBarLabel: '发现'
      })
    },
    FollowPage: {
      screen: FollowPage,
      navigationOptions: () => ({
        tabBarLabel: '关注'
      })
    },
    ProfilePage: {
      screen: ProfilePage,
      navigationOptions: () => ({
        tabBarLabel: '我的'
      })
    }
  },
  {
    navigationOptions: (navigation) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const SELECTED = require('../imgs/ic_tab_strip_icon_feed.png')
        const SELECTED_FOCUS = require('../imgs/ic_tab_strip_icon_feed_selected.png')

        const EXPLORE = require('../imgs/ic_tab_strip_icon_category.png')
        const EXPLORE_FOCUS = require('../imgs/ic_tab_strip_icon_category_selected.png')

        const FOLLOW = require('../imgs/ic_tab_strip_icon_follow.png')
        const FOLLOW_FOCUS = require('../imgs/ic_tab_strip_icon_follow_selected.png')

        const PROFILE = require('../imgs/ic_tab_strip_icon_profile.png')
        const PROFILE_FOCUS = require('../imgs/ic_tab_strip_icon_profile_selected.png')
        const { routeName } = navigation.state
        let iconName
        if (routeName === 'SelectedPage') {
          iconName = SELECTED
        } else if (routeName === 'ExplorePage') {
          iconName = EXPLORE
        } else if (routeName === 'FollowPage') {
          iconName = FOLLOW
        } else if (routeName === 'ProfilePage') {
          iconName = PROFILE
        }
        if (focused) {
          iconName = `${iconName}_FOCUS`
        }
        return (
          <Image {...checkSource(iconName)} style={{ width: 35, height: 35, resizeMode: 'contain' }} />
        )
      }
    })
  },
  {
    initialRouteName: 'SelectedPage',
    activeColor: '#03C2A6',
    inactiveColor: '#999999',
    barStyle: {
      height: 50,
      backgroundColor: '#fff',
      paddingBottom: 3,
      paddingTop: 0,
      borderTopWidth: 0.5 / ratio,
      borderTopColor: '#ededed'
    }
  }
)

const AppNavigator = createStackNavigator(
  {
    MainPage: {
      screen: TabStack
    },
    VideoDetailPage,
    VideoPlayPage,
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
