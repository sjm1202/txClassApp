import { StyleSheet, Dimensions } from 'react-native'
import { screenSize } from '../../utils/tools';
const sHeight = Dimensions.get("window").height;
export default StyleSheet.create({
    courseBoard: {},
    courseItem: {
      padding: 10,
      paddingTop: 0,
      flexDirection: 'row'
    },
    imgView: {
      width: screenSize.with * 1 / 2,
      height: 200 * 356 / screenSize.with * 1 / 2
    },
    img: {
      flex: 1
    },
    description: {
      flex: 1,
      paddingLeft: 10,
      paddingRight: 10,
      justifyContent: 'space-between'
    },
    title: {
      fontSize: 14,
      lineHeight: 18
    },
    courseDetail: {
      marginTop: 5,
      flexDirection: 'row',
      alignItems: 'center'
    },
    courseSection: {
      color: '#999',
    },
    coursePrice: {
      color: '#f4621f',
      marginLeft: 10,
    }
})