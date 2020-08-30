import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BoardScreen from './BoardScreen';
import DashboardScreen from './DashboardScreen';
import HabitsScreen from './HabitsScreen';
import ProfileScreen from './ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
    return (
        <Tab.Navigator initialRouteName="BoardScreen">
            <Tab.Screen name="BoardScreen" component={BoardScreen} />
            <Tab.Screen name="DashboardScreen" component={DashboardScreen} />
            <Tab.Screen name="HabitsScreen" component={HabitsScreen} />
            <Tab.Screen name="ProfileScreen" component={ProfileScreen} />
        </Tab.Navigator>  
    );
};

export default BottomNavigator;
