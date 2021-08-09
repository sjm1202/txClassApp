import React from 'react';
import { View, Text } from "react-native";
import { directToPage } from '../../../android_app/utils/extension';
import styles from './styles';
interface IPropss {
  title: string;
  navigation: any;
  id: string;
}
const MainTitle: React.FC<IPropss> = (props) => {
  const { title, navigation, id } = props;
  const handleJumpToList = () => {
    directToPage(navigation, '课程列表', {courseType: id});
  }
  return (
    <View style={styles.mainTitle}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.more} onPress={handleJumpToList}>查看更多</Text>
    </View>
  )
}
export default MainTitle;