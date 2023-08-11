import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const NewRoutineScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Name of the workout:</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Start Time:</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>End Time:</Text>
      <TextInput style={styles.input} />
      <Text style={styles.label}>Notes:</Text>
      <TextInput style={styles.input} multiline />
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddExerciseScreen')}>
        <Text style={styles.buttonText}>Add Exercise</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => { /* Finish routine and save to logs */ }}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  // Add styles similar to AddScreen
});

export default NewRoutineScreen;
