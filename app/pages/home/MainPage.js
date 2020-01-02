import React, { Component } from 'react'
import { StyleSheet, Image } from 'react-native'
import TabNavigator from 'react-native-tab-navigator'

import ExplorePage from '../explore/ExplorePage'
import FollowPage from '../follow/FollowPage'
import ProfilePage from '../profile/ProfilePage'
import SelectedPage from '../selected/SelectedPage'

const SELECTED_TAG = 'selected'
const SELECTED_TITLE = '精选'
const SELECTED_NORMAL = require('../../imgs/ic_tab_strip_icon_feed.png')
const SELECTED_FOCUS = require('../../imgs/ic_tab_strip_icon_feed_selected.png')

const EXPLORE_TAG = 'explore'
const EXPLORE_TITLE = '发现'
const EXPLORE_NORMAL = require('../../imgs/ic_tab_strip_icon_category.png')
const EXPLORE_FOCUS = require('../../imgs/ic_tab_strip_icon_category_selected.png')

const FOLLOW_TAG = 'follow'
const FOLLOW_TITLE = '关注'
const FOLLOW_NORMAL = require('../../imgs/ic_tab_strip_icon_follow.png')
const FOLLOW_FOCUS = require('../../imgs/ic_tab_strip_icon_follow_selected.png')

const PROFILE_TAG = 'profile'
const PROFILE_TITLE = '我的'
const PROFILE_NORMAL = require('../../imgs/ic_tab_strip_icon_profile.png')
const PROFILE_FOCUS = require('../../imgs/ic_tab_strip_icon_profile_selected.png')

class MainPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedTab: SELECTED_TAG
    }
  }

  render () {
    return (
      <TabNavigator
        tabBarStyle={styles.tab_container}
        tabBarShadowStyle={{ height: 0 }}
      >
        {this._renderTabItem(SELECTED_TAG, SELECTED_TITLE, SELECTED_NORMAL, SELECTED_FOCUS)}
        {this._renderTabItem(EXPLORE_TAG, EXPLORE_TITLE, EXPLORE_NORMAL, EXPLORE_FOCUS)}
        {this._renderTabItem(FOLLOW_TAG, FOLLOW_TITLE, FOLLOW_NORMAL, FOLLOW_FOCUS)}
        {this._renderTabItem(PROFILE_TAG, PROFILE_TITLE, PROFILE_NORMAL, PROFILE_FOCUS)}
      </TabNavigator>
    )
  }

  _renderTabItem = (tag, title, iconNormal, iconFocus) => {
    return (
      <TabNavigator.Item
        selected={this.state.selectedTab === tag}
        title={title}
        titleStyle={styles.tab_style}
        selectedTitleStyle={styles.selected_tab_style}
        renderIcon={() => <Image source={iconNormal} style={styles.icon_style} />}
        renderSelectedIcon={() => <Image source={iconFocus} style={styles.icon_style} />}
        onPress={() => this.setState({ selectedTab: tag })}
      >
        {this._createContentPage(tag)}
      </TabNavigator.Item>
    )
  }

  _createContentPage = (tag) => {
    switch (tag) {
      case SELECTED_TAG:
        return <SelectedPage {...this.props} />
      case EXPLORE_TAG:
        return <ExplorePage {...this.props} />
      case PROFILE_TAG:
        return <ProfilePage {...this.props} />
      case FOLLOW_TAG:
        return <FollowPage {...this.props} />
      default:
        return <SelectedPage {...this.props} />
    }
  }
}

const styles = StyleSheet.create({
  tab_style: {
    marginTop: -4,
    color: '#929292',
    fontSize: 8
  },
  selected_tab_style: {
    marginTop: -4,
    color: '#333',
    fontSize: 8
  },
  icon_style: {
    width: 35,
    height: 35,
    resizeMode: 'contain'
  },
  tab_container: {
    height: 42
  }
})

export default MainPage
