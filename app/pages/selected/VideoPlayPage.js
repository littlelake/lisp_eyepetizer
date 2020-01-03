import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import Video from 'react-native-video'

class VideoPlayPage extends Component {
  render () {
    const { playUrl } = this.props
    return (
      <View style={{ flex: 1, backgroundColor: '#333' }}>
        <Video
          ref={ref => (this.player = ref)}
          source={playUrl}
          rate={1.0}
          volume={1.0}
          muted={false}
          paused={false}
          repeat={false}
          playInBackground={false}
          playWhenInactive={false}
          progressUpdateInterval={250.0}
          resizeMode='contain'
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
