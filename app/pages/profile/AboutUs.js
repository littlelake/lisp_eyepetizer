import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'

class AboutUs extends React.PureComponent {
  render () {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView style={styles.scroll}>
          <View>
            <Text style={styles.text}>
              关于天眼
            </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
export default AboutUs

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    paddingHorizontal: 20,
    marginVertical: 15
  },
  text: {
    color: '#666',
    lineHeight: 32,
    fontSize: 15,
    textAlign: 'justify'
  }
})
