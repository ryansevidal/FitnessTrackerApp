import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './AppNavigator';

const AddScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('NewRoutine')}>
          <Text style={styles.buttonText}>New Routine</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Existing Routine</Text>
        </TouchableOpacity>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#121212',
  },
  button: {
    backgroundColor: '#a37cf4',
    padding: 15,
    borderRadius: 20,
    marginTop: 15,
    width: 200,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    color: '#fdfbf6',
    fontWeight: 'bold',
  },
});

export default AddScreen;
