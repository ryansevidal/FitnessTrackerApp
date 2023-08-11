import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { deleteRoutine } from './routinesData';
import { Ionicons } from '@expo/vector-icons';

const RoutineDetailScreen = ({ route, navigation }) => {
  const { routine } = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  const handleDelete = () => {
    deleteRoutine(routine.title);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{routine.title}</Text>
      <Text style={styles.exerciseLabel}>Exercises:</Text>
      {routine.exercises.map((exercise, index) => (
        <Text style={styles.exercise} key={index}>
          {exercise}
        </Text>
      ))}
      {/* <Button title="Go back" onPress={goBack} /> */}
      <Button title="Delete Routine" onPress={handleDelete} />
      <Ionicons
        name="arrow-back-outline"
        size={24}
        color="white"
        style={styles.backIcon}
        onPress={goBack}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingBottom: 0,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
    color: '#fdfbf6',
    textAlign: 'center'
  },
  exerciseLabel: { 
    color: '#fdfbf6',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  exercise: {
    color: 'white',
    fontSize: 16,
    marginBottom: 5,
  },  
  backIcon: {
    position: 'absolute',
    top: 32,
    left: 18,
  },
});

export default RoutineDetailScreen;