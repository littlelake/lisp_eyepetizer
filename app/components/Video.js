import React, { Component } from 'react'
import { Text, Animated, View, StyleSheet } from 'react-native'
import VideoPlayer from 'react-native-video'
import KeepAwake from 'react-native-keep-awake'
import Orientation from 'react-native-orientation'

import { checkSource } from '../utils'

class Video extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fullScreen: false,
      inlineHeight: 200
    }
  }

  render () {
    const { url, paused, resizeMode, loop, multiple, volume, muted, playInBackground, playWhenInactive } = this.props
    const { fullScreen, inlineHeight } = this.state

    const inline = {
      height: inlineHeight,
      alignSelf: 'stretch'
    }

    console.log(checkSource(url))

    return (
      <View syule={styles.container}>
        <VideoPlayer
          {...checkSource(url)}
          paused={paused || false}
          resizeMode={resizeMode || 'cover'}
          repeat={loop || false}
          style={fullScreen ? styles.fullScreen : inline}
          ref={(ref) => { this.player = ref }}
          rate={Number(multiple || 1, 10)}
          volume={volume || 1}
          muted={muted || false}
          playInBackground={playInBackground || false} // Audio continues to play when app entering background.
          playWhenInactive={playWhenInactive || false} // [iOS] Video continues to play when control or notification center are shown.
          // progressUpdateInterval={250.0}          // [iOS] Interval to fire onProgress (default to ~250ms)
          onLoadStart={() => this.onLoadStart()} // Callback when video starts to load
          onLoad={e => this.onLoad(e)} // Callback when video loads
          onProgress={e => this.progress(e)} // Callback every ~250ms with currentTime
          onEnd={() => this.onEnd()}
          onError={e => this.onError(e)}
          onBuffer={(e) => this.onBuffer(e)} // Callback when remote video is buffering
          onTimedMetadata={e => this.onTimedMetadata(e)} // Callback when the stream receive some metadata
        />
      </View>
    )
  }

  onLoadStart = () => { console.log('onLoadStart') }
  onLoad = () => { console.log('onLoad') }
  progress = () => { console.log('progress') }
  onEnd = () => { console.log('onEnd') }
  onError = () => { console.log('onError') }
  onBuffer = () => { console.log('onBuffer') }
  onTimedMetadata = () => { console.log('onTimedMetadata') }
}

const styles = StyleSheet.create({
  container: {

  }
})

export default Video
