import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import IntroScreen from './IntroScreen';
import BoardSizeScreen from './BoardSizeScreen';
import AddHabitsScreen from './AddHabitsScreen';
import TimeOfNotificationScreen from './TimeOfNotificationScreen';
import BoardScreen from './BoardScreen';
import DashboardScreen from './DashboardScreen';
import HabitsScreen from './HabitsScreen';
import ProfileScreen from './ProfileScreen';
import BottomNavigator from './BottomNavigator';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const Navigation = (props) => {
    if (props.firstTime) {
        return (
            <NavigationContainer>
              <Stack.Navigator initialRouteName="IntroScreen">
                <Stack.Screen name="IntroScreen" component={IntroScreen} />
                <Stack.Screen name="BoardSizeScreen" component={BoardSizeScreen} />
                <Stack.Screen name="AddHabitsScreen" component={AddHabitsScreen} />
                <Stack.Screen name="TimeOfNotificationScreen" component={TimeOfNotificationScreen} />
                <Stack.Screen name="BottomNavigator" component={BottomNavigator} />
              </Stack.Navigator>
            </NavigationContainer>
        );
    } else {
        return (
            <NavigationContainer>
                <Tab.Navigator initialRouteName="BoardScreen">
                    <Tab.Screen name="BoardScreen" component={BoardScreen} />
                    <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
                    <Tab.Screen name="HabitsScreen" component={HabitsScreen} />
                    <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
                </Tab.Navigator>  
            </NavigationContainer>
        );
    }
  
}

export default Navigation;