// import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import RoutinesScreen from './RoutinesScreen';
// import Push from './Push';

// const Stack = createStackNavigator();

// const AppNavigator = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen name="Routines" component={RoutinesScreen} />
//       <Stack.Screen name="Push" component={Push} />
//     </Stack.Navigator>
//   );
// };

// export default AppNavigator;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import RoutinesScreen from './RoutinesScreen';
import Push from './Push';

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Routines" component={RoutinesScreen} />
      <Stack.Screen name="Push" component={Push} />
    </Stack.Navigator>
  );
};

export default AppNavigator;