import React, { useState } from 'react';
import { View, TextInput, TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';

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
                    style={styles.input}
                    placeholderTextColor="#fdfbf6"
                />
                <TextInput 
                    placeholder="Reps" 
                    value={reps} 
                    onChangeText={setReps}
                    style={styles.input}
                    placeholderTextColor="#fdfbf6"
                />
                <TextInput 
                    placeholder="Weight" 
                    value={weight} 
                    onChangeText={setWeight}
                    style={[styles.input, styles.notesInput]} 
                    placeholderTextColor="#fdfbf6"
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
    notesInput: {
        borderBottomWidth: 0,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
});

export default AddExerciseScreen;
