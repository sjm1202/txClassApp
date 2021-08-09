import { transform } from '@babel/core'
import { StyleSheet } from 'react-native'
export default StyleSheet.create({
  tabContainer: {
    height: 35,
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderBottomWidth: 1
  },
  tabItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 35,
    paddingLeft: 20,
    paddingRight: 20,
    borderBottomWidth: 2,
    borderBottomColor: 'transparent'
  },
  tableItemActive: {
    borderBottomColor: '#23b8ff'
  },
  tabItemText: {
    fontSize: 14,
    color: '#333'
  },
  tabItemTextActive: {
    color: '#23b8ff'
  }
})