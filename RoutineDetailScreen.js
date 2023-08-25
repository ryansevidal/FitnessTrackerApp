import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
      <TouchableOpacity 
        style={styles.textWrapper}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>Delete Routine</Text>
      </TouchableOpacity>
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
    marginBottom: 15,
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
  textWrapper: {
    width: '35%',
    backgroundColor: '#a37cf4',
    padding: 3,
    paddingVertical: 1,
    borderRadius: 20,
    marginBottom: 12,
    marginTop: 15,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fdfbf6',
    fontSize: 13,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,
  },    
});

export default RoutineDetailScreen;