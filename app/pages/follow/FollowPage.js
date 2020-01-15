import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image, ScrollView } from 'react-native'
import { inject, observer } from 'mobx-react'

import { width, ratio } from '../../utils'
import FollowJOSN from './FollowJson.json'
import { BackgroundImage } from '../../components'

@inject('themeStore')
@observer
class FollowPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      data: null
    }
  }

  render () {
    const { data } = this.state
    const { themeMode } = this.props.themeStore
    return (
      <ScrollView>
        <View style={[styles.container, { backgroundColor: themeMode.pageBackgroundColor }]}>
          {
            data && data.length
              ? [0, 1].map((row, idx) => (
                <View style={{ width: Math.floor((width - 40) / 2) }} key={idx}>
                  {
                    data.map((item, index) => (
                      <View key={item._id}>
                        {(index % 2) === 1 && idx === 0 ? this._renderItem(item, false) : null}
                        {(index % 2) === 0 && idx === 1 ? this._renderItem(item, true) : null}
                      </View>
                    ))
                  }
                </View>
              )) : <View style={styles.no_record}><Text style={{ color: '#999' }}>--暂无数据--</Text></View>
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

  _renderItem = (item, bool) => {
    const { themeMode } = this.props.themeStore
    return (
      <TouchableOpacity activeOpacity={0.6}>
        <View style={[styles.item, bool ? { marginLeft: 10 } : '', { backgroundColor: themeMode.rowItemBackgroundColor }]}>
          <BackgroundImage source={item.url} style={styles.image_bg} width={Math.floor((width - 40) / 2)}>
            {item.selected ? <Text style={styles.image_txt}>精选</Text> : null}
          </BackgroundImage>
          <Text style={[styles.title, { color: themeMode.titleColor }]} numberOfLines={2}>{item.title}</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', paddingBottom: 10 }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image source={require('../../imgs/home_page_header_icon.png')} style={styles.icon} tintColor={themeMode.arrowColor} />
              <Text style={[styles.txt, { color: themeMode.subTitleColor }]}>{item.author}</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={[styles.num, { color: themeMode.subTitleColor }]}>{item.star}</Text>
              <Image source={require('../../imgs/ic_action_favorites_grey.png')} style={styles.star} tintColor={themeMode.arrowColor} />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    borderWidth: 1 / ratio,
    borderColor: '#fff',
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
  },
  no_record: {
    flex: 1,
    flexDirection: 'row',
    height: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    marginTop: 20
  }
})

export default FollowPage
