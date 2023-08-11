import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AddScreen from './AddScreen';
import NewRoutineScreen from './NewRoutineScreen';
import AddExerciseScreen from './AddExerciseScreen';
import ExerciseDetailScreen from './ExerciseDetailScreen';

const Stack = createStackNavigator();

const AppNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="Add" screenOptions={{headerShown: false}}>
            <Stack.Screen name="AddScreen" component={AddScreen} />
            <Stack.Screen name="NewRoutine" component={NewRoutineScreen} />
            <Stack.Screen name="AddExercise" component={AddExerciseScreen} />
            <Stack.Screen name="ExerciseDetail" component={ExerciseDetailScreen} />
        </Stack.Navigator>
    );
};

export default AppNavigator;
