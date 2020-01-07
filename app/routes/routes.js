import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { MainPage, InitApp } from '../pages/home/index'
import { VideoDetailPage, VideoPlayPage } from '../pages/selected'
import { Login, ProfilePage, LoginPrev } from '../pages/profile'

// import Test from '../pages/Test'

const AppNavigator = createStackNavigator(
  {
    Home: InitApp,
    MainPage,
    VideoDetailPage,
    VideoPlayPage,
    Login,
    ProfilePage,
    LoginPrev
    // Test
  },
  {
    initialRouteName: 'MainPage'
  }
)

export default createAppContainer(AppNavigator)
