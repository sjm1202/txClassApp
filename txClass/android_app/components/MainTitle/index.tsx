import React from 'react';
import { View, Text } from "react-native";
import styles from './styles';
interface IPropss {
  title: string;
}
const MainTitle: React.FC<IPropss> = (props) => {
  const { title } = props;
  return (
    <View style={styles.mainTitle}>
        <Text style={styles.title}>{title}</Text>
    </View>
  )
}
export default MainTitle;