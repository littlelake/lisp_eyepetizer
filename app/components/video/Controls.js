import React, { Component } from 'react'
import { View, Animated, StyleSheet, TouchableOpacity, TouchableWithoutFeedback } from 'react-native'
import PropTypes from 'prop-types'

import ControlBar from './ControlBar'
import Loading from './Loading'
import ProgressBar from './ProgressBar'

class Controls extends Component {
  constructor (props) {
    super(props)

    this.state = {
      hideControls: false, // 隐藏Controls
      seconds: 0,
      seeking: false
    }

    this.progressbar = new Animated.Value(2)
    this.animControls = new Animated.Value(1)
    this.scale = new Animated.Value(1)
  }

  onSeek (pos) {
    this.props.onSeek(pos)
    if (!this.state.seeking) {
      this.setState({ seeking: true })
    }
  }

  onSeekRelease (pos) {
    this.props.onSeekRelease(pos)
    this.setState({ seeking: false, seconds: 0 })
  }

  // loading
  loading () {
    return (
      <View style={styles.container}>
        <Loading theme='#f00' loading={this.props.theme.loading} />
      </View>
    )
  }

  // hiddenControls
  hiddenControls () {
    Animated.timing(this.progressbar, { toValue: 0, duration: 200 }).start()
    return (
      <TouchableWithoutFeedback style={styles.container} onPress={() => this.showControls()}>
        <Animated.View style={[styles.container, { paddingBottom: this.progressbar }]}>
          <ProgressBar theme={this.props.theme.progress} progress={this.props.progress} />
        </Animated.View>
      </TouchableWithoutFeedback>
    )
  }

  // 显示视频控件
  showControls () {
    this.setState({ hideControls: false }, () => {
      this.progressbar.setValue(2)
      Animated.parallel([
        Animated.timing(this.animControls, { toValue: 1, duration: 200 }),
        Animated.timing(this.scale, { toValue: 1, duration: 200 })
      ]).start()
    })
  }

  // 隐藏控件
  hideControls () {
    Animated.parallel([
      Animated.timing(this.animControls, { toValue: 0, duration: 200 }),
      Animated.timing(this.scale, { toValue: 0.25, duration: 200 })
    ]).start(() => this.setState({ hideControls: true, seconds: 0 }))
  }

  // 视频控件
  displayControls () {
    const { paused, fullscreen, muted, progress, currentTime, duration, inlineOnly, theme } = this.props
    const { center, ...controlBar } = theme
    return (
      <TouchableOpacity activeOpacity={1} onPress={() => this.hideControls()}>
        <Animated.View style={[styles.container, { opacity: this.animControls }]}>
          <ControlBar
            // toggleFS={() => this.props.toggleFS()}
            toggleMute={() => this.props.toggleMute()}
            togglePlay={() => this.props.togglePlay()}
            muted={muted}
            paused={paused}
            fullscreen={fullscreen}
            onSeek={pos => this.onSeek(pos)}
            onSeekRelease={pos => this.onSeekRelease(pos)}
            progress={progress}
            currentTime={currentTime}
            duration={duration}
            theme={controlBar}
            inlineOnly={inlineOnly}
          />
        </Animated.View>
      </TouchableOpacity>
    )
  }

  render () {
    if (this.props.loading) return this.loading()
    if (this.state.hideControls) return this.hiddenControls()
    return this.displayControls()
  }
}

Controls.propTypes = {
  // toggleFS: PropTypes.func.isRequired,
  toggleMute: PropTypes.func.isRequired,
  togglePlay: PropTypes.func.isRequired,
  onSeek: PropTypes.func.isRequired,
  onSeekRelease: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    zIndex: 99
  }
})

export default Controls
