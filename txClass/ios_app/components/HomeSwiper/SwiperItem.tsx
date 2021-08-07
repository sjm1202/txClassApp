import React from "react";
import {View, Image, TouchableWithoutFeedback, SegmentedControlIOSComponent} from 'react-native';
interface IProps {
  data: any;
  styles: any;
  navigation: any;
}
import { directToPage } from "../../utils/extension";

const SwiperItem: React.FC<IProps> = (props) => {
  const { data, styles, navigation } = props;
  const toDetailPage = () => {
    directToPage(navigation, 'Detail', {});
  }
  return (
    <TouchableWithoutFeedback
      style={styles.swiperSize}
      onPress={toDetailPage}
    >
      <Image style={styles.swiperSize} source={{uri: data.img}}/>
    </TouchableWithoutFeedback>
  )
}
export default SwiperItem;