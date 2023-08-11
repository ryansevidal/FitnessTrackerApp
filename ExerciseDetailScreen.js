import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';

const ExerciseDetailScreen = ({ route, navigation }) => {
  const [exerciseData, setExerciseData] = useState(route.params.exercise);

  useFocusEffect(
    React.useCallback(() => {
      // When the screen is focused, retrieve the saved exercise data
      const fetchExerciseData = async () => {
        const storedData = await AsyncStorage.getItem('exerciseData');
        if (storedData) {
          setExerciseData(JSON.parse(storedData));
        }
      };

      fetchExerciseData();
    }, [])
  );

  const handleFinish = async () => {
    // Save the exercise data to AsyncStorage
    await AsyncStorage.setItem('exerciseData', JSON.stringify(exerciseData));

    // Navigate back to NewRoutineScreen
    navigation.navigate('NewRoutine');
  };
  const renderSets = () => {
    let setsComponents = [];

    for (let i = 0; i < exerciseData.sets; i++) {
      setsComponents.push(
        <View key={i} style={styles.setInputWrapper}>
          <TextInput
            placeholder="Reps"
            keyboardType="number-pad"
            style={[styles.setInput, styles.repsInput]}
            placeholderTextColor="#fdfbf6"
          />
          <TextInput
            placeholder="Weight"
            keyboardType="numeric"
            style={styles.setInput}
            placeholderTextColor="#fdfbf6"
          />
        </View>
      );
    }

    return setsComponents;
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{exerciseData.name}</Text>
      <ScrollView style={styles.container}>
        {renderSets()}
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={handleFinish}>
        <Text style={styles.buttonText}>Finish</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#121212',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fdfbf6',
    margin: 20
  },
  setInputWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#fdfbf6',
    borderRadius: 20,
    overflow: 'hidden',
  },
  setInput: {
    flex: 1,
    fontWeight: 'bold',
    backgroundColor: '#a37cf4',
    color: '#fdfbf6',
    paddingHorizontal: 10,
    paddingVertical: 15,
    fontSize: 20,
  },
  repsInput: {
    fontWeight: 'bold',
    borderRightWidth: 1,
    borderColor: '#fdfbf6',
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
    alignSelf: 'center'
  },
});

export default ExerciseDetailScreen;
