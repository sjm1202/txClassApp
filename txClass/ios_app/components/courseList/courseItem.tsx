import React from 'react';
import { View, TouchableWithoutFeedback, Image, Text } from "react-native";
import { directToPage } from '../../utils/extension';
interface IProps {
  data: any;
  styles: any;
  navigation: any;
}
const Index: React.FC<IProps> = (props) => {
  const { data, styles, navigation} = props;
  const toDetailPage = () => {
    directToPage(navigation, 'Detail', {courseId: data.id})
  }
  return (
    <TouchableWithoutFeedback
      onPress={toDetailPage}
    >
      <View style={styles.courseItem}>
        <View style={styles.imgView}>
          <Image style={styles.img} source={{uri: data.img}}/>
        </View>
        <View style={styles.description}>
          <View style={styles.courseTitle}>
            <Text numberOfLines={2} style={styles.title}>{data.title}</Text>
          </View>
          <View style={styles.courseDetail}>
            <Text style={styles.courseSection}>
              共{data.section}节
            </Text>
            <Text style={styles.coursePrice}>
              {data.price || '免费'}
            </Text>
          </View>
        </View>
        
      </View>
    </TouchableWithoutFeedback>
  )
}
export default Index;