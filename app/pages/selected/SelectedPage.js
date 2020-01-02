import React, { Component } from 'react'
import { View, Text, FlatList, ImageBackground, Image, StyleSheet, TouchableOpacity } from 'react-native'

import { axios, API, width, formatDate } from '../../utils'

class SelectedPage extends Component {
  constructor (props) {
    super(props)
    this.state = {
      videoList: []
    }
  }

  render () {
    const { videoList } = this.state
    return (
      <View style={{ paddingBottom: 20, backgroundColor: '#fff' }}>
        <FlatList
          data={videoList}
          renderItem={(item) => this._renderItem(item)}
        />
      </View>
    )
  }

  _renderItem = (item) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handleVideo}>
          <ImageBackground style={styles.video_img} source={{ uri: item.item.data.content.data.cover.feed }}>
            <Text style={styles.time}>{formatDate(item.item.data.content.data.releaseTime, 'mm:ss')}</Text>
          </ImageBackground>
        </TouchableOpacity>
        <View style={styles.video_info}>
          <View style={styles.video_head}>
            <Image source={{ uri: item.item.data.header.icon }} style={styles.head_img} />
          </View>
          <View style={styles.video_cont}>
            <Text numberOfLines={1} style={{ width: '100%', fontSize: 16, fontWeight: '500' }}>{item.item.data.content.data.title}</Text>
            <Text numberOfLines={1} style={{ paddingTop: 4, width: '100%', fontSize: 14 }}>{item.item.data.content.data.description}</Text>
          </View>
        </View>
      </View>
    )
  }

  componentDidMount () {
    this._fetchVideoList()
  }

  _fetchVideoList = () => {
    axios.post(API.videoList, { }).then(res => {
      const data = res.data
      if (data.code === 200) {
        console.log(data.result)
        this.setState({ videoList: data.result })
      }
    }).catch(err => {
      console.log(err)
    })
  }

  handleVideo = () => {

  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#fff'
  },
  video_img: {
    position: 'relative',
    width: width - 30,
    height: 160,
    backgroundColor: '#F5F6F8',
    borderRadius: 8,
    overflow: 'hidden',
    resizeMode: 'cover'
  },
  time: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    color: '#fff'
  },
  head_img: {
    width: 40,
    height: 40,
    borderRadius: 40,
    overflow: 'hidden',
    backgroundColor: '#F5F6F8'
  },
  video_info: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10
  },
  video_cont: {
    marginLeft: 15,
    width: width - 85
  }
})

export default SelectedPage
