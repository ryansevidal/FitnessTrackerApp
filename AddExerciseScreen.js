import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';

const AddExerciseScreen = ({ navigation }) => {
  const [exerciseName, setExerciseName] = useState('');
  const [sets, setSets] = useState('');

  const handleAddExercise = () => {
    if (exerciseName !== '' && sets !== '') {
      // Pass data back to NewRoutineScreen
      navigation.navigate('NewRoutine', {
        newExercise: {
          name: exerciseName,
          sets: sets,
        },
      });
    } else {
      alert('Please fill both inputs.');
    }
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.inputWrapper}>
        <TextInput
          placeholder="Exercise Name"
          value={exerciseName}
          onChangeText={setExerciseName}
          style={[styles.input, styles.nameInput]}
          placeholderTextColor="#fdfbf6"
        />
        <TextInput
          placeholder="Sets"
          value={sets}
          onChangeText={setSets}
          style={[styles.input, styles.bottomInput]}
          placeholderTextColor="#fdfbf6"
          keyboardType="number-pad"
        />
      </SafeAreaView>
      <TouchableOpacity style={styles.button} onPress={handleAddExercise}>
        <Text style={styles.buttonText}>Add Exercise</Text>
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
    marginTop: 150
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#a37cf4',
    color: '#fdfbf6',
    fontSize: 18,
    fontWeight: 'bold',
    borderBottomWidth: 1,
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
  bottomInput: {
    borderBottomWidth: 0,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  }

});

export default AddExerciseScreen;
