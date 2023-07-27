import React from 'react';
import { StatusBar } from 'react-native';
//import { NavigationContainer } from '@react-navigation/native';
//import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import ProfileScreen from './ProfileScreen';

export default function App() {
  return (
    <>
      <StatusBar 
        barStyle="light-content" 
        hidden={false}
        backgroundColor="#ccc"
        transulucent={true} 
      />
      <ProfileScreen/>
    </>
  );
}

