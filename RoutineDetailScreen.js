import React from 'react';
import { View, Text, Button } from 'react-native';
import { deleteRoutine } from './routinesData'; // Adjust the import path

const RoutineDetailScreen = ({ route, navigation }) => {
  const { routine } = route.params;

  const handleDelete = () => {
    // Call the deleteRoutine function from routinesData.js
    deleteRoutine(routine.title); // Make sure you imported the function
    // Navigate back to the RoutinesScreen or refresh the screen
    navigation.goBack();
  };

  return (
    <View>
      <Text>{routine.title}</Text>
      <Text>Exercises:</Text>
      {routine.exercises.map((exercise, index) => (
        <Text key={index}>{exercise}</Text>
      ))}
      <Button title="Delete Routine" onPress={handleDelete} />
    </View>
  );
};

export default RoutineDetailScreen;
