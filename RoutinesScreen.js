import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, StyleSheet, Text } from 'react-native';
import { getPreexistingRoutines, getAllRoutines } from './routinesData';

const RoutinesScreen = ({ navigation }) => {
  const [allRoutines, setAllRoutines] = useState([]);

  const fetchRoutines = () => {
    const routines = getAllRoutines();
    setAllRoutines(routines);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchRoutines);
    return unsubscribe;
  }, [navigation]); 

  // Fetch routines initially when the screen loads
  useEffect(() => {
    fetchRoutines();
  }, []);

  const navigateToRoutineDetail = (routine) => {
    navigation.navigate('RoutineDetailScreen', { routine });
  };

  const navigateToCreateRoutine = () => {
    navigation.navigate('CreateRoutineScreen');
  };

  return (
    <View style={styles.container}>
        {/* Adds the text at the top */}
       <View style={styles.headerWrapper}>
         <Text style={styles.headerText}>Your Routines</Text>
       </View>
        <ScrollView>
        {allRoutines.map((routine, index) => (
          <TouchableOpacity
            style={[styles.textWrapper, 
                index === 0 && { marginTop: '5%' },
            ]}
            onPress={() => navigateToRoutineDetail(routine)}
          >
            <Text style={styles.buttonText}>{routine.title}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={[styles.textWrapper, styles.addButton]}
          onPress={navigateToCreateRoutine}
        >
          <Text style={styles.addButtonText}>+</Text>
        </TouchableOpacity>
      </ScrollView>
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
    headerWrapper: {
      alignItems: 'center',
      marginTop: '5%',
      marginBottom: 0,
    },
    headerText: {
      color: '#ffffff',
      fontSize: 32,
      fontWeight: 'bold',
    },             
    textWrapper: {
      width: '60%',
      backgroundColor: '#a37cf4',
      padding: 5,
      borderRadius: 20,
      marginBottom: 10,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonText: {
      color: '#fdfbf6',
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 10,
    },    
    addButton: {
        backgroundColor: '#a37cf4',
        width: 30,
        height: 30,
        borderRadius: 15,
    },
    addButtonText: {
        color: '#fdfbf6',
        fontSize: 16,
        fontWeight: 'bold',
      },   
});

export default RoutinesScreen;