import React, { Component } from 'react'
import { View, Switch } from 'react-native'

import { ListRow } from '../../components'

class Settings extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: false
    }
  }

  render () {
    const { value } = this.state
    const { navigate } = this.props.navigation
    return (
      <View style={{ flex: 1, backgroundColor: '#fff' }}>
        <ListRow title='夜间模式'>
          <Switch onTintColor='#ddd' tintColor='#ededed' thumbColor='#03C2A6' onValueChange={this.handleChangeValue} value={value} />
        </ListRow>
        <ListRow title='关于天眼' rightArrow onPress={() => navigate('AboutUs')} />
        <ListRow title='产品版本' rightArrow />
      </View>
    )
  }

  handleChangeValue = (value) => {
    this.setState({ value })
  }
}

export default Settings
