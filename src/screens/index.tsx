import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeScreen} from './home-screen';
import SplashScreen from 'react-native-splash-screen';
import TaskDetail from './task-detail';
import AddTask from './add-task';

const Stack = createNativeStackNavigator();

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="TaskDetail" component={TaskDetail} />
        <Stack.Screen name="AddTaskScreen" component={AddTask} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
