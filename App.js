import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

export default function App() {
  return (
    <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" transulucent={true} />

  );
}

const styles = StyleSheet.create({

});

const bottomNavBar
