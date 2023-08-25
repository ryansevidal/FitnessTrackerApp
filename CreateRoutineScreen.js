import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, Text, FlatList, StyleSheet } from 'react-native';
import { addRoutine } from './routinesData';
import { Ionicons } from '@expo/vector-icons';


const CreateRoutineScreen = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [exercises, setExercises] = useState([]);
  const [exerciseInput, setExerciseInput] = useState('');

  const handleSave = () => {
    const newRoutine = { title, exercises };
    addRoutine(newRoutine);
    navigation.goBack();
  };  

  const handleAddExercise = () => {
    if (exerciseInput.trim() !== '') {
      setExercises([...exercises, exerciseInput]);
      setExerciseInput('');
    }
  };

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back-outline"
        size={24}
        color="white"
        style={styles.backIcon}
        onPress={goBack}
      />
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Routine Title"
            value={title}
            onChangeText={setTitle}
            style={styles.title}
          />
          <View style={styles.exerciseInputContainer}>
            <TextInput
              placeholder="Exercise"
              value={exerciseInput}
              onChangeText={setExerciseInput}
              style={styles.exerciseText}           
            />
          </View>
            <TouchableOpacity
              onPress={handleAddExercise}
            >
              <Text style={styles.buttonText}>Add Exercise</Text>
            </TouchableOpacity>

          <View>
            <TouchableOpacity
              style={[styles.textWrapper, styles.saveButton]}
              onPress={handleSave}
            >
              <Text style={styles.buttonText}>Save Routine</Text>
            </TouchableOpacity>
          </View>

          <FlatList
            data={exercises}
            renderItem={({ item }) => <Text>{item}</Text>}
            keyExtractor={(item, index) => index.toString()}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    padding: 20,
    backgroundColor: '#121212',
  },
  inputContainer: {
    marginBottom: 20, 
    marginTop: '12%'
  },
  exerciseInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  textWrapper: {
    width: '35%',
    backgroundColor: '#a37cf4',
    padding: 3,
    paddingVertical: 1,
    borderRadius: 20,
    marginBottom: 0,
    marginTop: 10,
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
  title: {
    fontSize: 20,
    marginBottom: 10,
    color: 'white', 
  },
  exerciseText: {
    color: 'white',
    fontSize: 20,
  },
  backIcon: {
    position: 'absolute',
    top: 32,
    left: 18,
  },
});

export default CreateRoutineScreen;