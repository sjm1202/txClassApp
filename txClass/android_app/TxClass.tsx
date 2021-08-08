import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomIcon from '../commons/customIcon';
import Home from './pages/home';
import Search from './pages/search';
import Detail from './pages/detail';
import Logo from './components/Logo';

const BottomTab: React.FC<{}> = (props) => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if(route.name === '主页'){
            iconName='shouye';
          }else if(route.name === '查找课程'){
            iconName='faxian';
          }
          return <CustomIcon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#23b8ff',
        tabBarInactiveTintColor: '#999',
      })}
    >
      <Tab.Screen name="主页" component={Home} options={{headerShown: false}} />
      <Tab.Screen name="查找课程" component={Search} options={{headerShown: false}}/>
    </Tab.Navigator>
  )

}

const Stack = createNativeStackNavigator();
function TxClass() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Tab" 
          component={BottomTab} 
          options={{ headerTitle: props => (<Logo {...props}/>)}}
        />
        <Stack.Screen 
          name="Detail" 
          component={Detail} 
          options={{ 
            headerTitle: props => (<Logo {...props}/>),
            headerBackTitle: '返回'
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default TxClass;