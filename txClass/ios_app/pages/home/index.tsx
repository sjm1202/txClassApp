import React, { useState, useEffect, useRef } from "react";
import {
    View,
    RefreshControl,
    ScrollView,
    ActivityIndicator,
    Text,
    TouchableWithoutFeedback
} from 'react-native';
import CustomIcon from "../../../commons/customIcon";
import homeModel from '../../models/home';
import HomeSwiper from '../../components/HomeSwiper';
import MainTitle from '../../components/MainTitle';
import CourseList from "../../components/courseList";
import styles from './styles'

interface PageProps {
    navigation: any;
}
const Home: React.FC<PageProps> = (props) => {
  const loadFlag = useRef<boolean>(false);
  const { navigation } = props;
  const [ swiperDatas, setSwiperDatas ] = useState<any[]>([]);
  const [ courseTypes, setCourseTypes ] = useState<any[]>([]);
  const [ allTypeCount, setAllTypeCoun ] = useState<number>(0);
  const [ courseDatas, setCourseDatas ] = useState<any[]>([]);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    loadFlag.current = true
    homeModel.getHomeData(0, 2).then((res: any) => {
      if(res.success){
        const data = res.data;
        setCourseTypes(data.courseTypes);
        setCourseDatas(data.courseDatas);
        setSwiperDatas(data.swiperDatas);
      }
      setRefreshing(false);
      loadFlag.current = false
    })
  }, []);

  const getHomeData = async (offset: number, limit: number) => {
    loadFlag.current = true
    let res: any = await homeModel.getHomeData(offset, limit);
    console.log(offset, limit, res)
    if(res.success){
      const data = res.data;
      setCourseTypes([...courseTypes, ...data.courseTypes]);
      setCourseDatas([...courseDatas, ...data.courseDatas]);
      setSwiperDatas(data.swiperDatas);
      setAllTypeCoun(data.allTypeCount);
    }
    loadFlag.current = false
  }

  const handleJumpToSearch = () => {
    props.navigation.navigate('查找课程')
  }

  const handleMomentumScrollEnd = (e: any) => {
    const nativeEvent = e.nativeEvent;
    if((nativeEvent.contentSize.height - nativeEvent.contentOffset.y - nativeEvent.layoutMeasurement.height) < 10){
      //滚动到底部了
      if(allTypeCount > courseTypes.length){
        const offset = courseTypes.length;
        if(!loadFlag.current){
          getHomeData(offset, 2);
        }
      }
    }
  }

  useEffect(() => {
    getHomeData(0, 2)
  }, [])
  
  return (
    <ScrollView
      automaticallyAdjustContentInsets={false}
      showsVerticalScrollIndicator={false}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
      onMomentumScrollEnd={handleMomentumScrollEnd}
    >
      <HomeSwiper swiperData={swiperDatas} navigation={navigation}/>
      {
        courseTypes.map((item, index) => {
          return (
            <View key={index}>
              <MainTitle title={item.name}></MainTitle>
              <CourseList courseData={courseDatas.filter(data => data.type === item.id)} navigation={navigation}/>
            </View>
          )
        })
      }
      
      {
        allTypeCount <= courseTypes.length ? (
          <TouchableWithoutFeedback  onPress={handleJumpToSearch}>
            <View style={styles.jumpSearchWrap}>
              <Text style={styles.jumpSearch}>查看所有课程</Text><CustomIcon name='faxian' size={14} color='#999'/>
            </View>
            
          </TouchableWithoutFeedback>
        ) : <ActivityIndicator animating={true}/>
      }
    </ScrollView>
  )
}

export default Home;