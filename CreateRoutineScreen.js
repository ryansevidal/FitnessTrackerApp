import React, { useState } from 'react';
import { View, TextInput, Button, Text, FlatList } from 'react-native';
import { addRoutine } from './routinesData';

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

  return (
    <View>
      <TextInput
        placeholder="Routine Title"
        value={title}
        onChangeText={setTitle}
      />
      <View>
        <TextInput
          placeholder="Exercise"
          value={exerciseInput}
          onChangeText={setExerciseInput}
        />
        <Button title="Add Exercise" onPress={handleAddExercise} />
      </View>
      <FlatList
        data={exercises}
        renderItem={({ item }) => <Text>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
      <Button title="Save Routine" onPress={handleSave} />
    </View>
  );
};

export default CreateRoutineScreen;
