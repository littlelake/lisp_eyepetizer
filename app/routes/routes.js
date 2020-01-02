import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { MainPage, InitApp } from '../pages/home/index'

const AppNavigator = createStackNavigator(
  {
    Home: InitApp,
    MainPage
  },
  {
    initialRouteName: 'MainPage'
  }
)

export default createAppContainer(AppNavigator)
