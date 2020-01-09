import React from 'react'
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import PropTypes from 'prop-types'

import { checkSource } from '../../utils'
import Time from './Time'
import Scrubber from './Scrubber'

const ControlBar = (props) => {
  const { currentTime, duration, theme, onSeek, onSeekRelease, progress } = props
  return (
    <LinearGradient colors={['rgba(0,0,0,0)', 'rgba(0,0,0,0.75)']} style={styles.container}>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          activeOpacity={0.6}
          style={{ width: 22, height: 22 }}
          onPress={() => props.togglePlay()}
        >
          {
            props.paused ? <Image {...checkSource(require('../../imgs/video/audio_play.png'))} style={{ width: 22, height: 22 }} />
              : <Image {...checkSource(require('../../imgs/video/suspend.png'))} style={{ width: 22, height: 22 }} />
          }
        </TouchableOpacity>
        <Time time={currentTime} theme={theme.seconds} />
        <Scrubber
          onSeek={pos => onSeek(pos)}
          onSeekRelease={pos => onSeekRelease(pos)}
          progress={progress}
          theme={{ scrubberThumb: theme.scrubberThumb, scrubberBar: theme.scrubberBar }}
        />
        <Time time={duration} theme={theme.duration} />
        <View style={styles.btnContainer}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={{ width: 22, height: 22 }}
            // onPress={() => props.toggleFS()}
          >
            <Image {...checkSource(require('../../imgs/video/unfold.png'))} style={{ width: 22, height: 22 }} />
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  )
}

ControlBar.propTypes = {
  // toggleFS: PropTypes.func.isRequired,
  onSeek: PropTypes.func.isRequired,
  onSeekRelease: PropTypes.func.isRequired,
  fullscreen: PropTypes.bool.isRequired,
  // inlineOnly: PropTypes.bool.isRequired,
  progress: PropTypes.number.isRequired,
  currentTime: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
  theme: PropTypes.object.isRequired
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'flex-end',
    paddingLeft: 10,
    paddingRight: 15,
    height: 45
  },
  fullContainer: {
    justifyContent: 'center',
    paddingHorizontal: 15,
    height: 100
  },
  fullPannel: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 13,
    paddingRight: 26,
    height: 42
  },
  fullLeftPannel: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row'
  },
  timeInfo: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 18
  },
  btnContainer: {
    alignItems: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center'
  }
})

export default ControlBar
