import React, { Component } from 'react'
import { Animated, View, Text, TouchableOpacity } from 'react-native'

import AnimateView from '../components/AnimateView'

class TestAnimate extends Component {
  constructor (props) {
    super(props)

    this.state = {
      width: new Animated.Value(0),
      height: new Animated.Value(0)
    }

    this.opacity = new Animated.Value(0)
  }

  render () {
    const { width, height } = this.state
    return (
      <AnimateView style={{ width, height, backgroundColor: '#0DCEB2', justifyContent: 'center', alignItems: 'center' }}>
        <Text>123</Text>
      </AnimateView>
      // <Animated.View style={{ flex: 1, opacity: this.opacity }}>
      //   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      //     <Text>1231</Text>
      //     <TouchableOpacity activeOpacity={0.6} onPress={this.handleChangeOpacity} style={{ marginTop: 20 }}>
      //       <Text style={{ fontSize: 14 }}>BUTTON</Text>
      //     </TouchableOpacity>
      //   </View>
      // </Animated.View>
    )
  }

  componentDidMount () {
    // Animated.timing(this.opacity, { toValue: 1, duration: 200 }).start()
    // Animated.parallel([
    //   Animated.timing(this.state.width, { toValue: 250, duration: 1000 }),
    //   Animated.timing(this.state.height, { toValue: 250, duration: 1000 })
    // ]).start()
    Animated.sequence([
      Animated.timing(this.state.width, { toValue: 250, duration: 1000 }),
      Animated.timing(this.state.height, { toValue: 250, duration: 1000 })
    ]).start()
  }

  // handleChangeOpacity = () => {
  //   console.log(this.opacity._value, this.opacity._value === 0.5)
  //   this.opacity._value === 0.5
  //     ? Animated.timing(this.opacity, { toValue: 1, duration: 200 }).start()
  //     : Animated.timing(this.opacity, { toValue: 0.5, duration: 200 }).start()
  // }
}

export default TestAnimate
