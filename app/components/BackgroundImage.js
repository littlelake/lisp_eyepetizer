import React, { Component } from 'react'
import { ImageBackground, Image } from 'react-native'

class BackgroundImage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      height: 100
    }
  }

  // 获取图片的高度
  _getHeight = (imgSourse) => {
    const imgW = this.props.width
    Image.getSize(imgSourse, (w, h) => {
      if (imgW) {
        const imgH = Math.floor(imgW * h / w)
        this.setState({ height: imgH })
      }
    })
  }

  render () {
    const { source, style } = this.props
    const { height } = this.state
    return (
      <ImageBackground source={typeof source === 'string' ? { uri: source } : source} style={[{ height }, style]}>
        {this.props.children}
      </ImageBackground>
    )
  }

  componentWillMount () {
    this._getHeight(this.props.source)
  }
}

export default BackgroundImage
