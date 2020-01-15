import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

export default class ListRow extends React.PureComponent {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    activeOpacity: PropTypes.number,
    height: PropTypes.number,
    paddingHorizontal: PropTypes.number,
    title: PropTypes.string,
    desc: PropTypes.string,
    onPress: PropTypes.func
  }

  static defaultProps = {
    activeOpacity: 0.6,
    height: 62,
    paddingHorizontal: 20,
    title: '',
    desc: ''
  }

  render () {
    const { activeOpacity, onPress, height, paddingHorizontal, title, desc, rightArrow } = this.props
    return (
      <TouchableOpacity activeOpacity={activeOpacity} onPress={onPress}>
        <View style={[styles.listWrap, { height, paddingHorizontal }]}>
          <Text style={{ color: '#333', fontSize: 16 }}>{title}</Text>
          {desc ? <Text style={[styles.rightTxt, { fontSize: 14, color: '#999' }]}>{desc}</Text> : null}
          {rightArrow ? <Image source={require('../imgs/arrow-right.png')} style={styles.rightArrow} /> : null}
          {this.props.children}
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  listWrap: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%'
  },
  rightArrow: {
    width: 16,
    height: 16,
    resizeMode: 'contain'
  },
  rightTxt: {
    width: 70
  }
})
