import { Dimensions } from 'react-native'
import API from './api'
import axios from './axios'

const { width, height } = Dimensions.get('window')
export {
  API,
  axios,
  width,
  height
}
