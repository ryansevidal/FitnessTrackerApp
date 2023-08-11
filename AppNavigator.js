import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import LogScreen from './LogScreen';
import AddScreen from './AddScreen';
import NewRoutineScreen from './NewRoutineScreen';
import AddExerciseScreen from './AddExerciseScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Add">
            <Stack.Screen name="Add" component={AddScreen} />
            <Stack.Screen name="NewRoutine" component={NewRoutineScreen} />
            <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
