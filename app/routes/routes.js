import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { MainPage, InitApp } from '../pages/home/index'
import { VideoDetailPage, VideoPlayPage } from '../pages/selected'
import { Login, ProfilePage, LoginPrev } from '../pages/profile'

const AppNavigator = createStackNavigator(
  {
    Home: InitApp,
    MainPage,
    VideoDetailPage,
    VideoPlayPage,
    Login,
    ProfilePage,
    LoginPrev
  },
  {
    initialRouteName: 'LoginPrev'
  }
)

export default createAppContainer(AppNavigator)
