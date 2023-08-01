import React from 'react';
import { StatusBar } from 'react-native';
import ProfileScreen from './ProfileScreen';
import RoutinesScreen from './RoutinesScreen';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons';

import DietScreen from './DietScreen';

// export default function App() {
//   return (
//     <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" transulucent={true} />

//   );
//   const styles = StyleSheet.create({ });
// }

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 

// const Profile = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>add progress graphs</Text>
//   </View>
// );

const Log = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Log Screen</Text>
  </View>
);

const Add = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Add Screen</Text>
  </View>
);

// const Routines = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Routines Screen</Text>
//   </View>
// );

const Diet = () => (
  <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
    <Text>Diet Screen</Text>
  </View>
);

// routine presets
// const PushScreen = () => (
//   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//     <Text>Push Screen</Text>
//   </View>
// );

const App = () => {
  return (
    <><>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor="#ccc"
        translucent={false} />

    </><NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            "tabBarActiveTintColor": "#a73cd4",
            "tabBarInactiveTintColor": "#fdfbf6",
            tabBarStyle: {
              backgroundColor: '#121212'
            },
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              let iconColor = color;
              let iconSize = size;
              let iconStyle = {};

              if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'Log') {
                iconName = focused ? 'stats-chart' : 'stats-chart-outline';
              } else if (route.name === 'Add') {
                iconName = focused ? 'add-circle' : 'add-circle';
                iconColor = '#37db2e';
                iconSize = size + 30;
                iconStyle = { position: 'absolute', bottom: 0.1 };
              }
              else if (route.name === 'Routines') {
                iconName = focused ? 'barbell' : 'barbell-outline';
              }
              else if (route.name === 'Diet') {
                iconName = focused ? 'restaurant' : 'restaurant-outline';
              }

              return <Ionicons name={iconName} size={iconSize} color={iconColor} style={iconStyle} />;
            },
            headerShown: false,
          })}
        >
          <Tab.Screen name="Profile" component={ProfileScreen} />
          <Tab.Screen name="Log" component={Log} />
          <Tab.Screen name="Add" component={Add} />
          <Tab.Screen name="Routines" component={RoutinesScreen} />
          <Tab.Screen name="Diet" component={DietScreen} />
        </Tab.Navigator>
      </NavigationContainer></>
      
  );
};

export default App;