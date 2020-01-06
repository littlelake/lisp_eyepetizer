import React, { Component } from 'react'
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'

import { width, ratio } from '../../utils'

const detailItem = [
  { id: '001', title: '#广告', img: '' },
  { id: '002', title: '#剧情', img: '' },
  { id: '003', title: '#音乐', img: '' },
  { id: '004', title: '#运动', img: '' },
  { id: '005', title: '#创意', img: '' },
  { id: '006', title: '#旅行', img: '' },
  { id: '007', title: '#影视', img: '' },
  { id: '008', title: '#记录', img: '' },
  { id: '009', title: '#科技', img: '' },
  { id: '0010', title: '#开胃', img: '' },
  { id: '0011', title: '#游戏', img: '' },
  { id: '0012', title: '#动画', img: '' },
  { id: '0013', title: '#搞笑', img: '' },
  { id: '0014', title: '#时尚', img: '' },
  { id: '0014', title: '#生活', img: '' },
  { id: '0014', title: '#综艺', img: '' }
]

class ExplorePage extends Component {
  render () {
    return (
      <ScrollView style={{ backgroundColor: '#ededed' }}>
        <View style={styles.banner}>
          <Text style={styles.title}>开 眼 年 度 回 顾</Text>
          <View style={styles.subtitle}>
            <Text style={{ paddingRight: 15 }}>E Y E P E T I Z E R</Text>
            <Text>R E W I N D</Text>
          </View>
          <TouchableOpacity style={styles.detail}>
            <Text style={{ fontSize: 12, color: '#666' }}>查看详情</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.detail_title}>热门分类</Text>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal style={{ marginTop: 10, height: 260 }}>
          <View>
            <View style={{ flexDirection: 'row' }}>{this.handleDetailChild('even')}</View>
            <View style={{ flexDirection: 'row' }}>{this.handleDetailChild('odd')}</View>
          </View>
        </ScrollView>
      </ScrollView>
    )
  }

  handleDetailChild = (type) => {
    return (
      detailItem && detailItem.length ? detailItem.map((item, index) => (
        <View key={item.id}>
          {type === 'even' && index % 2 === 0 ? this._renderItem(type, item, index, detailItem.length) : null}
          {type === 'odd' && index % 2 === 1 ? this._renderItem(type, item, index, detailItem.length) : null}
        </View>
      )) : null
    )
  }

  _renderItem = (type, item, index, length) => {
    return (
      <TouchableOpacity onPress={() => this.handleItem(item)}>
        <View style={[styles.item, { marginLeft: ((type === 'even' && index === 0) || (type === 'odd' && index - 1 === 0)) ? 20 : 0, marginRight: index === length - 1 ? 20 : 10 }]}>
          <Text>{item.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }

  handleItem = (item) => {
    console.log(item.id)
  }
}

const styles = StyleSheet.create({
  banner: {
    position: 'relative',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 20,
    marginBottom: 40,
    width: width - 40,
    height: 250,
    backgroundColor: '#fff',
    borderRadius: 4,
    overflow: 'hidden'
  },
  title: {
    marginBottom: 10,
    fontSize: 26,
    fontWeight: '500'
  },
  subtitle: {
    flexDirection: 'row',
    paddingVertical: 2,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#333'
  },
  detail: {
    position: 'absolute',
    bottom: 20,
    paddingHorizontal: 6,
    paddingVertical: 4,
    borderWidth: 1 / ratio,
    borderColor: '#333',
    borderRadius: 13,
    overflow: 'hidden'
  },
  detail_title: {
    paddingLeft: 20,
    paddingBottom: 10,
    fontSize: 26,
    fontWeight: '500'
  },
  item: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginBottom: 10,
    width: 120,
    height: 120,
    borderRadius: 4,
    overflow: 'hidden',
    backgroundColor: '#fff'
  }
})

export default ExplorePage
