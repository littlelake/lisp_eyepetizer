import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native'

import { Video } from '../../components'

class VideoPlayPage extends Component {
  render () {
    const { getParam } = this.props.navigation
    return (
      <View style={{ flex: 1, backgroundColor: '#333' }}>
        <Video
          url={getParam('playUrl')}
          style={styles.video_bg}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  video_bg: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  }
})

export default VideoPlayPage
