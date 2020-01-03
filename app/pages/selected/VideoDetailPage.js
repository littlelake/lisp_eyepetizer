import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableWithoutFeedback, ImageBackground, Image } from 'react-native'

import VideoPlayPage from './VideoPlayPage'

class ActionIcon extends Component {
  render () {
    return (
      <Image source={this.props.source} style={styles.img_bottom_action} />
    )
  }
}

class VideoDetailPage extends Component {
  render () {
    const { coverForDetail, coverBlured, title, description } = this.props
    return (
      <View style={{ flex: 1, flexDirection: 'column' }}>
        <TouchableWithoutFeedback onPress={this.handleVideoPlay}>
          <ImageBackground
            style={styles.cover_detail}
            source={coverForDetail}
          >
            <Image style={styles.icon_play} source={require('../../imgs/ic_action_play.png')} />
          </ImageBackground>
        </TouchableWithoutFeedback>
        <Image
          source={coverBlured}
          style={styles.img_cover_blur}
        >
          <View style={styles.container_bottom}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.description}>{description}</Text>
            <View style={{ flexDirection: 'row', position: 'absolute', left: 20, bottom: -100 }}>
              <ActionIcon source={require('../../imgs/ic_action_favorites_without_padding.png')} />
              <ActionIcon source={require('../../imgs/ic_action_share_without_padding.png')} />
              <ActionIcon source={require('../../imgs/ic_action_reply_nopadding.png')} />
              <ActionIcon source={require('../../imgs/ic_action_offline_without_padding.png')} />
            </View>
          </View>
        </Image>
      </View>
    )
  }

  handleVideoPlay = () => {

  }
}

const styles = StyleSheet.create({
  container_bottom: {
    paddingTop: 20,
    paddingLeft: 20,
    flexDirection: 'column'
  },
  img_bottom_action: {
    marginRight: 40,
    height: 20,
    width: 20,
    resizeMode: 'contain'
  },
  cover_detail: {
    flexGrow: 20,
    justifyContent: 'center',
    alignItems: 'center',
    resizeMode: 'cover'
  },
  icon_play: {
    width: 60,
    height: 60
  },
  img_cover_blur: {
    resizeMode: 'cover',
    flexGrow: 10
  },
  title: {
    fontSize: 16,
    color: '#fff'
  },
  description: {
    color: '#D1CDCD',
    fontSize: 12,
    marginTop: 32,
    paddingTop: 14,
    borderTopWidth: 0.3,
    borderTopColor: '#716668',
    lineHeight: 18
  }
})

export default VideoDetailPage
