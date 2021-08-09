import React, { useEffect, useState, useRef } from 'react';
import { 
  View, 
  Text,
  RefreshControl,
  ScrollView,
  ActivityIndicator
} from "react-native";
import styles from './styles';
import TabList from '../../components/tabList';
import listModel from '../../models/list';
import CourseList from '../../components/courseList'
interface IProps {
  route: any,
  navigation: any;
}
const List: React.FC<IProps> = (props) => {
  const loadFlag = useRef<boolean>(false);
  const {route, navigation} = props;
  const [courseTypes, setCourseTypes] = useState<any[]>([]);
  const [courses, setCourses] = useState<any[]>([])
  const [active, setActive] = useState<string>('');
  const [totalCount, setTotolCount] = useState<number>(0);
  const [refreshing, setRefreshing] = React.useState(true);
  const handleTabClick = (active: string) => {
    if(loadFlag.current === true){
      return;
    }
    setRefreshing(true);
    setActive(active);
  }
  const loadCourseTypes = async () => {
    const res: any = await listModel.getCourseTypes();
    if(res.success){
      if(route.params && route.params.courseType && res.data.course_types.length){
        let target = res.data.course_types.find((item: any) => item.id === route.params.courseType);
        let others = res.data.course_types.filter((item: any) => item.id !== route.params.courseType);
        if(target){
          others.unshift(target)
        }
        setActive(route.params.courseType);
        setCourseTypes(others);
      }else if(res.data.course_types.length){
        setCourseTypes(res.data.course_types);
        setActive(res.data.course_types[0].id)
      }
    }
  }
  const loadCourse = async (courseType: string, offset: number, limit: number) => {
    let res: any = await listModel.getCourses(courseType, offset, limit);
    setRefreshing(false);
    if(res.success){
      if(offset === 0){
        setCourses([...res.data.courses]);
      }else{
        setCourses([...courses, ...res.data.courses]);
      }
      setTotolCount(res.data.total);
    }
  }
  const onRefresh = async () => {
    setRefreshing(true);
    await loadCourse(active, 0, 7);
    setRefreshing(false);
  }

  const handleMomentumScrollEnd = (e: any) => {
    const nativeEvent = e.nativeEvent;
    if((nativeEvent.contentSize.height - nativeEvent.contentOffset.y - nativeEvent.layoutMeasurement.height) < 10){
      //滚动到底部了
      if(totalCount > courses.length){
        const offset = courses.length;
        if(!loadFlag.current){
          loadCourse(active, offset, 7);
        }
      }
    }
  }

  useEffect(() => {
    loadCourseTypes();
  }, [route.params]);

  useEffect(() => {
    if(active){
      loadCourse(active, 0, 7)
    }
  }, [active]);
  return (
    <View style={styles.container}>
      <TabList tabInfos={courseTypes} active={active} onTabClick={handleTabClick}/>
      <ScrollView 
        style={styles.courseScroll}
        automaticallyAdjustContentInsets={false}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        onMomentumScrollEnd={handleMomentumScrollEnd}
      >
        <CourseList navigation={navigation} courseData={courses}/>
        {
          totalCount <= courses.length ? (
              <View style={styles.noMore}>
                <Text style={styles.noMoreText}>没有更多</Text>
              </View>
          ) : <ActivityIndicator animating={true}/>
        }
      </ScrollView>
    </View>
  )
}
export default List;