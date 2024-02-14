import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../Screens/Home';
import Appointment from '../Screens/Appointment';
import Profile from '../Screens/Profile';
import { Ionicons } from '@expo/vector-icons';
import Homenavigation from './Homenavigation';
import Explores from '../Screens/Explores';

import { FontAwesome5 } from '@expo/vector-icons';


const Tab = createBottomTabNavigator()
export default function TabNavigation() {
  return (
    <Tab.Navigator 
    screenOptions={{headerShown:false,}}>
        <Tab.Screen name ='Home' component={Homenavigation}
        options={{tabBarIcon:({color,size})=>
        <Ionicons name="ios-home" size={size} color={color} />} }/>

       <Tab.Screen name ='Explore' component={Explores} 
        options={{tabBarIcon:({color,size})=>
        <FontAwesome5 name="hospital-user" size={size} color="color" />}}/>

        <Tab.Screen name ='Appointment' component={Appointment} 
        options={{tabBarIcon:({color,size})=>
        <Ionicons name="calendar" size={size} color={color} />}}/>

        <Tab.Screen name ='Profile' component={Profile} 
        options={{tabBarIcon:({color,size})=>
        <Ionicons name="md-person" size={size} color={color} />}}/>

    </Tab.Navigator>
  )
}

