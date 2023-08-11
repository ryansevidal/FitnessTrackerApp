import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Button } from 'react-native';

const AddExerciseScreen = ({ navigation }) => {
    const [exerciseName, setExerciseName] = useState('');
    const [sets, setSets] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');

    const handleAddExercise = () => {
        // TODO: Save the exercise data and navigate back or add to a list
    };

    return (
        <View style={styles.container}>
            <TextInput placeholder="Exercise Name" value={exerciseName} onChangeText={setExerciseName} />
            <TextInput placeholder="Sets" value={sets} onChangeText={setSets} />
            <TextInput placeholder="Reps" value={reps} onChangeText={setReps} />
            <TextInput placeholder="Weight" value={weight} onChangeText={setWeight} />
            <Button title="Add Exercise" onPress={handleAddExercise} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212',
    },
});

export default AddExerciseScreen;
