import React from 'react'
import { Animated, View } from 'react-native'

class AnimateViewBox extends React.PureComponent {
  render () {
    return (
      <View style={this.props.style}>
        {this.props.children}
      </View>
    )
  }
}

export default Animated.createAnimatedComponent(AnimateViewBox)
