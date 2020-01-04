import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'

import { width } from '../../utils'
import FollowJOSN from './FollowJson.json'
import { BackgroundImage } from '../../components'

class FollowPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: null
    }
  }

  render () {
    const { data } = this.state
    return (
      <ScrollView>
        <View style={styles.container}>
          {
            data && data.length ? data.map((item, index) => (
              <TouchableOpacity activeOpacity={0.6} key={item._id}>
                <View style={styles.item}>
                  <BackgroundImage source={item.url} style={styles.image_bg} width={Math.floor((width - 40) / 2)}>
                    {item.selected ? <Text style={styles.image_txt}>精选</Text> : null}
                  </BackgroundImage>
                  <Text style={styles.title} numberOfLines={2}>{item.title}</Text>
                  <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Image source={require('../../imgs/home_page_header_icon.png')} style={styles.icon} />
                      <Text style={styles.txt}>{item.author}</Text>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                      <Text style={styles.num}>{item.star}</Text>
                      <Image source={require('../../imgs/ic_action_favorites_grey.png')} style={styles.star} />
                    </View>
                  </View>
                </View>
              </TouchableOpacity>
            )) : <Text>暂无数据</Text>
          }
        </View>
      </ScrollView>
    )
  }

  componentWillMount () {
    if (FollowJOSN.status === 200) {
      this.setState({ data: FollowJOSN.results })
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 20,
    paddingHorizontal: 15,
    backgroundColor: '#f4f4f4'
  },
  item: {
    width: Math.floor((width - 40) / 2),
    marginBottom: 20,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#fff'
  },
  image_bg: {
    position: 'relative',
    width: Math.floor((width - 40) / 2),
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#ededed',
    resizeMode: 'cover'
  },
  image_txt: {
    position: 'absolute',
    top: 6,
    left: 5,
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    color: '#fff',
    borderRadius: 4,
    overflow: 'hidden'
  },
  icon: {
    width: 30,
    height: 30,
    borderRadius: 30,
    overflow: 'hidden',
    backgroundColor: '#ededed'
  },
  star: {
    width: 18,
    height: 18,
    resizeMode: 'contain'
  },
  title: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '400',
    color: '#333'
  },
  txt: {
    paddingLeft: 5,
    fontSize: 14,
    color: '#666'
  },
  num: {
    paddingRight: 5,
    fontSize: 13,
    color: '#444'
  }
})

export default FollowPage
