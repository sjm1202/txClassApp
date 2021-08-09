import React from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native'
interface IProps {
  styles: any,
  tabInfo: any,
  active: string,
  onTabClick: (arg1: string) => void;
}
const TabItem: React.FC<IProps> = (props) => {
  const { styles, tabInfo, active, onTabClick } = props;
  return (
    <TouchableWithoutFeedback onPress={() => onTabClick(tabInfo.id)}>
      <View
        style={[ styles.tabItem, tabInfo.id === active && styles.tableItemActive ]}
      >
        <Text 
          style={[ styles.tabItemText, tabInfo.id === active && styles.tabItemTextActive]}
        >
          {tabInfo.shortName}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  )
}
export default TabItem;