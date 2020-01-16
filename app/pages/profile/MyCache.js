import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { ImageCacheManager } from 'react-native-cached-image'

import { ListRow } from '../../components'

class MyCache extends Component {
  constructor (props) {
    super(props)

    this.state = {
      cacheSize: ''
    }
  }

  render () {
    const { cacheSize } = this.state
    return (
      <View style={{ flex: 1 }}>
        <ListRow title='我的缓存' onPress={() => this.handleModal()} desc={cacheSize + 'M'} />
      </View>
    )
  }

  componentDidMount () {
    this.getCache()
  }

  handleModal () {
    Alert.alert(
      '是否清楚缓存？',
      '',
      [
        { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
        { text: 'OK', onPress: () => this.clearCache() }
      ],
      { cancelable: false }
    )
  }

  getCache () {
    ImageCacheManager({}).getCacheInfo().then(res => {
      console.log(res)
      const changeTrillion = (Number(res.size) / 1024 / 1024).toFixed(2)
      this.setState({ cacheSize: changeTrillion })
    }).catch(err => {
      console.log(err)
    })
  }

  clearCache () {
    ImageCacheManager({}).clearCache()
    this.getCache()
  }
}

export default MyCache
