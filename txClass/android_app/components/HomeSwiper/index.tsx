import React from "react";
import {View} from 'react-native';
import Swiper from 'react-native-swiper'
import SwiperItem from './SwiperItem'
import styles from './styles';
interface IProps {
  swiperData: any[],
  navigation: any,
}
const HomeSwiper: React.FC<IProps> = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.swiperSize}>
      <Swiper
        index={0}
        autoplay={true}
        loop={true}
        paginationStyle={styles.pagination}
        activeDotColor="#fff"
      >
        {
          props.swiperData.map((item, index) => {
            return (
              <SwiperItem key={index} data={item} navigation={navigation} styles={styles}/>
            )
          })
        }
      </Swiper>
    </View>
  )
}
export default HomeSwiper;