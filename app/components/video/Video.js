import React, { Component } from 'react'
import { Text, Animated, View, StyleSheet, StatusBar, Alert } from 'react-native'
import VideoPlayer from 'react-native-video'
import KeepAwake from 'react-native-keep-awake'
import Orientation from 'react-native-orientation'

import { checkSource, platform, width, height } from '../../utils'
import Controls from './Controls'

const defaultTheme = {
  title: '视频测试',
  more: '#FFF',
  center: true,
  fullscreen: false,
  volume: 1,
  scrubberThumb: '#00DEBD',
  scrubberBar: '#00DEBD',
  seconds: 0,
  duration: 0,
  progress: 0,
  loading: false
}

class Video extends Component {
  constructor (props) {
    super(props)

    this.state = {
      fullScreen: false,
      inlineHeight: 200,
      muted: false, // 静音
      paused: false, // 暂停
      loading: false, // loading
      currentTime: 0,
      seeking: false,
      duration: 0,
      progress: 0,
      renderError: false
    }

    this.animInline = new Animated.Value(width * 0.5625)
  }

  render () {
    const { url, resizeMode, loop, multiple, volume, playInBackground, playWhenInactive, logo, title, onMorePress, theme, inlineOnly } = this.props
    const { fullScreen, inlineHeight, paused, muted, loading, progress, currentTime, duration } = this.state

    const inline = {
      height: inlineHeight,
      alignSelf: 'stretch'
    }

    const setTheme = {
      ...defaultTheme,
      ...theme
    }

    return (
      <View syule={styles.container}>
        <StatusBar hidden />
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
        <Controls
          ref={(ref) => { this.controls = ref }}
          toggleMute={() => this.toggleMute()}
          // toggleFS={() => this.toggleFS()}
          togglePlay={() => this.togglePlay()}
          paused={paused}
          muted={muted}
          fullscreen={fullScreen}
          loading={loading}
          onSeek={val => this.seek(val)}
          onSeekRelease={pos => this.onSeekRelease(pos)}
          progress={progress}
          currentTime={currentTime}
          duration={duration}
          logo={logo}
          title={title}
          more={!!onMorePress}
          onMorePress={() => onMorePress()}
          theme={setTheme}
          inlineOnly={inlineOnly}
        />
      </View>
    )
  }

  onLoadStart = () => {
    this.setState({ paused: true, loading: true })
  }

  onLoad = (data) => {
    if (!this.state.loading) return false
    // this.props.onLoad(data)
    const inlineHeight = 200
    this.setState({
      paused: !this.props.autoPlay,
      loading: false,
      inlineHeight,
      duration: data.duration
    }, () => {
      Animated.timing(this.animInline, { toValue: inlineHeight, duration: 200 }).start()
      this.props.onPlay(!this.state.paused)
      // if (!this.state.paused) {
      //   KeepAwake.activate()
      //   if (this.props.fullScreenOnly) {
      //     this.setState({ fullScreen: true }, () => {
      //       this.props.onFullScreen(this.state.fullScreen)
      //       this.animToFullscreen(height)
      //       if (this.props.rotateToFullScreen) Orientation.lockToLandscape()
      //     })
      //   }
      // }
    })
  }

  progress = (time) => {
    const { currentTime } = time
    const progress = currentTime / this.state.duration
    if (!this.state.seeking) {
      this.setState({ progress, currentTime }, () => {
        this.props.onProgress(time)
      })
    }
  }

  onEnd = () => {
    this.props.onEnd()
    const { loop } = this.props
    if (!loop) this.pause()
    this.onSeekRelease(0)
    this.setState({ currentTime: 0 }, () => {
      if (!loop) this.controls.showControls()
    })
  }

  onError = (msg) => {
    this.props.onError(msg)
    const { error } = this.props
    this.setState({ renderError: true }, () => {
      let type
      switch (true) {
        case error === false:
          type = error
          break
        case typeof error === 'object':
          type = Alert.alert(error.title, error.message, error.button, error.options)
          break
        default:
          type = Alert.alert('Oops!', 'There was an error playing this video, please try again later.', [{ text: 'Close' }])
          break
      }
      return type
    })
  }

  onBuffer = (e) => {
    const { paused } = this.state
    if (platform === 'ios') {
      if (!e.isBuffering && !paused) {
        this.setState({ paused: true }, () => {
          setTimeout(() => {
            this.setState({ paused: false })
          })
        })
      }
    }
  }

  onTimedMetadata = () => { console.log('onTimedMetadata') }

  // 是否静音
  toggleMute = () => {
    this.setState({ muted: !this.state.muted })
  }

  // 播放/暂停
  togglePlay = () => {
    this.setState({ paused: !this.state.paused }, () => {
      this.props.onPlay(!this.state.paused)
      Orientation.getOrientation((e, orientation) => {
        if (this.props.inlineOnly) return false
        if (!this.state.paused) {
          KeepAwake.activate()
        } else {
          KeepAwake.deactivate()
        }
      })
    })
  }

  seek (percent) {
    const currentTime = percent * this.state.duration
    this.setState({ seeking: true, currentTime })
  }

  onSeekRelease (percent) {
    const seconds = percent * this.state.duration
    this.setState({ progress: percent, seeking: false }, () => {
      this.player.seek(seconds)
    })
  }
}

const styles = StyleSheet.create({
  container: {

  }
})

export default Video
