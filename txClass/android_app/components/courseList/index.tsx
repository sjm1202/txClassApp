import React from 'react';
import { View, Text } from "react-native";
import styles from './styles';
import CourseItem from './courseItem';
interface IProps {
  courseData: any[];
  navigation: any;
}
const Index: React.FC<IProps> = (props) => {
    const { courseData, navigation } = props
    return (
        <View style={styles.courseBoard}>
          {
            courseData.map((item: any, index: number) => {
              return (
                <CourseItem key={index} styles={styles} data={item} navigation={navigation}/>
              )
            })
          }
        </View>
    )
}
export default Index;