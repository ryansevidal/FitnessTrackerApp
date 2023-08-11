// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import RoutinesScreen from './routinescreen2';
// import RoutineDetailScreen from './RoutineDetailScreen';
// import CreateRoutineScreen from './CreateRoutineScreen';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <NavigationContainer>
//       <AppNavigator />
//       <Stack.Navigator initialRouteName="Routines">
//         <Stack.Screen name="Routines" component={RoutinesScreen} />
//         <Stack.Screen name="RoutineDetailScreen" component={RoutineDetailScreen} />
//         <Stack.Screen name="CreateRoutineScreen" component={CreateRoutineScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default AppNavigator;
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import ProfileScreen from './ProfileScreen';
import RoutinesScreen from './RoutinesScreen';
import RoutineDetailScreen from './RoutineDetailScreen';
import CreateRoutineScreen from './CreateRoutineScreen';
// Import other screens as needed

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const RoutinesStack = createStackNavigator();

const RoutinesStackScreen = () => (
<RoutinesStack.Navigator>
    <RoutinesStack.Screen name="Routines" component={RoutinesScreen} />
    <RoutinesStack.Screen name="RoutineDetailScreen" component={RoutineDetailScreen} />
    <RoutinesStack.Screen name="CreateRoutineScreen" component={CreateRoutineScreen} />
  </RoutinesStack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        {/* ... (other tab screens) */}
        <Tab.Screen name="Routines" component={RoutinesStackScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;