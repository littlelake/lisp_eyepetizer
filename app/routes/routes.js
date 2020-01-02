import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { MainPage, InitApp } from '../home/index'

const AppNavigator = createStackNavigator(
  {
    Home: InitApp,
    MainPage
  },
  {
    initialRouteName: 'Home'
  }
)

export default createAppContainer(AppNavigator)
