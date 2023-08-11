import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ExerciseDetailScreen = ({ route }) => {
  const { exercise } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{exercise.name}</Text>
      <Text style={styles.detail}>Sets: {exercise.sets}</Text>
      <Text style={styles.detail}>Reps: {exercise.reps}</Text>
      <Text style={styles.detail}>Weight: {exercise.weight}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 24,
    color: '#fdfbf6'
  },
  detail: {
    fontSize: 18,
    marginTop: 10,
    color: '#fdfbf6'
  }
});

export default ExerciseDetailScreen;
