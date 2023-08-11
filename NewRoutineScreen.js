import React, { useState, useEffect } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';

const NewRoutineScreen = ({ navigation, route }) => {

  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    if (route.params?.newExercise) {
      setExercises(prevExercises => [...prevExercises, route.params.newExercise]);
    }
  }, [route.params?.newExercise]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.inputWrapper}>
        <TextInput
          style={[styles.input, styles.nameInput]}
          placeholder="Name of the workout"
          placeholderTextColor="#fdfbf6"
        />
        <TextInput
          style={styles.input}
          placeholder="Start Time"
          placeholderTextColor="#fdfbf6"
        />
        <TextInput
          style={styles.input}
          placeholder="End Time"
          placeholderTextColor="#fdfbf6"
        />
        <TextInput
          style={[styles.input, styles.notesInput]}
          placeholder="Notes"
          placeholderTextColor="#fdfbf6"
          multiline
        />
      </SafeAreaView>
      <ScrollView style={styles.exercisesList}>
        {exercises.map((exercise, index) => (
          <TouchableOpacity
            key={index}
            style={styles.exerciseItem}
            onPress={() => navigation.navigate('ExerciseDetail', { exercise })}
          >
            <Text style={styles.exerciseName}>{exercise.name}</Text>
            <Text style={styles.sets}>{exercise.sets} sets</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddExercise')}>
        <Text style={styles.buttonText}>Add Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { /* Finish routine and save to logs */ }}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#121212',
    padding: 20,
  },
  inputWrapper: {
    alignSelf: 'stretch',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#a37cf4',
    color: '#fdfbf6',
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 1, // Only the bottom border
    borderColor: '#fdfbf6',
    paddingHorizontal: 15,
  },
  button: {
    backgroundColor: '#a37cf4',
    padding: 15,
    borderRadius: 20,
    marginTop: 15,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fdfbf6',
    fontWeight: 'bold',
  },
  nameInput: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  notesInput: {
    height: 70,
    borderBottomWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  exercisesList: {
    width: '100%',
    padding: 10
  },
  exerciseItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: '#a37cf4',
    borderBottomWidth: 1
  },
  exerciseName: {
    fontSize: 16,
    color: '#fdfbf6'
  },
  sets: {
    fontSize: 16,
    color: '#fdfbf6'
  }
});

export default NewRoutineScreen;
