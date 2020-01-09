import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PropTypes from 'prop-types'

class Time extends Component {
  render () {
    return (
      <View style={styles.container}>
        <Text style={{ color: this.props.theme }}>{this.getTime(parseInt(this.props.time, 10))}</Text>
      </View>
    )
  }

  getTime (time) {
    // format the seconds saved into 00:00:00
    const secs = time % 60
    const s2 = (time - secs) / 60
    const mins = s2 % 60
    const hrs = (s2 - mins) / 60
    const hours = this.addZeros(hrs) > 0 ? `${this.addZeros(hrs)}:` : ''
    return `${hours}${this.addZeros(mins)}:${this.addZeros(secs)}`
  }

  addZeros (time) {
    return (time < 10) ? (`0${time}`) : time
  }
}

Time.propTypes = {
  theme: PropTypes.string.isRequired,
  time: PropTypes.number.isRequired
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    minWidth: 60,
    backgroundColor: 'transparent'
  }
})

export default Time
