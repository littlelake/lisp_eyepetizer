import React, { Component } from 'react'
import { View, Switch } from 'react-native'
import { inject, observer } from 'mobx-react'
import Config from 'react-native-config'

import { ListRow } from '../../components'

@inject('themeStore')
@observer
class Settings extends Component {
  render () {
    const { navigate } = this.props.navigation
    const { isNightMode, themeMode } = this.props.themeStore
    console.log(isNightMode, themeMode.pageBackgroundColor, 'isNightMode')
    return (
      <View style={{ flex: 1, backgroundColor: themeMode.rowItemBackgroundColor }}>
        <ListRow title='夜间模式'>
          <Switch trackColor='#ededed' thumbColor='#03C2A6' onValueChange={this.handleChangeValue} value={isNightMode} />
        </ListRow>
        <ListRow title='关于天眼' rightArrow onPress={() => navigate('AboutUs')} />
        <ListRow title='产品版本' desc={Config.APP_VERSION_NAME} />
      </View>
    )
  }

  handleChangeValue = (value) => {
    const { setValue } = this.props.themeStore
    setValue('isNightMode', value)
  }
}

export default Settings
