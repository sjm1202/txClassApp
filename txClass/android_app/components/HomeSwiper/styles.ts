import { StyleSheet, Dimensions } from 'react-native'
import { screenSize } from '../../utils/tools'
export default StyleSheet.create({
  pagination: {
    bottom: 5
  },
  swiperSize: {
    width: screenSize.with,
    height: 300 / 710 * screenSize.with
  }
})