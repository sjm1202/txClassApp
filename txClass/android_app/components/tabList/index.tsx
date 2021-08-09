import React from 'react';
import { ScrollView, View } from 'react-native';
import styles from './styles';
import TabItem from './tabItem';
interface IProps {
  tabInfos: any[];
  onTabClick: (arg: string) => void;
  active: string;
}
const Tablist: React.FC<IProps> = (props) => {
  const {tabInfos, onTabClick, active} = props;
  return (
    <View style={styles.tabContainer}>
      <ScrollView 
        showsHorizontalScrollIndicator={false}
        horizontal={true}
      >
        {
          tabInfos.map((item) => {
            return <TabItem key={item.id} styles={styles} tabInfo={item} active={active} onTabClick={onTabClick}/>
          })
        }
      </ScrollView>
    </View>
  )
}
export default Tablist;