import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, TextInput} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import GraphTitleModal from './GraphTitleModal';
import EditRoutineScreen from './EditRoutineScreen'; 
const Stack = createStackNavigator();

const texts = ['Push', 'Pull', 'Legs', 'Chest/Back', 'Shoulders/Arms', 'Core', 'Cardio', 'Add Routine']

const RoutinesHomeScreen = ({ navigation, route }) => {

  const [routineButtons, setRoutineButtons] = useState(texts);
  useEffect(() => {
    const newRoutine = route.params?.newRoutine;
    if (newRoutine) {
      setRoutineButtons([...routineButtons, newRoutine.title]);
    }
  }, [route.params?.newRoutine]);

  const handleButtonPress = (routine) => {
    if (routine === 'Add Routine') {
      navigation.navigate('AddRoutineScreen');
    }
    else {
      navigation.navigate(routine);
    }
  };

  return (
    <View style={styles.container}>
      {/* Adds the text at the top */}
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Your Routines</Text>
      </View>
      <ScrollView>
        {texts.map((routine, index) => (
          <TouchableOpacity
              style={routine === 'Add Routine' ? styles.plusButton : styles.textWrapper}
              onPress={() => handleButtonPress(routine)}
              key={index} // Don't forget to add a unique key
          >
            {/* <Text style={styles.buttonText}>{routine}</Text> */}
            <Text style={routine === 'Add Routine' ? styles.plusButtonText : styles.buttonText}>
              {routine === 'Add Routine' ? '+' : routine}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const Push = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.text}>Push</Text>
    <ScrollView>
      <View style={styles.routinesList}>
        <Text style={styles.routineItem}>Bench Press</Text>
        <Text style={styles.routineItem}>Shoulder Press</Text>
        <Text style={styles.routineItem}>Dips</Text>
        <Text style={styles.routineItem}>Incline Dumbell Press</Text>
        <Text style={styles.routineItem}>Lateral Raises</Text>
        <Text style={styles.routineItem}>Tricep Pulldown</Text>
        {/* Add more routines as needed */}
      </View>
    </ScrollView>
    <TouchableOpacity
      style={styles.editButton}
      onPress={() => navigation.navigate('EditRoutineScreen', { routineName: 'Push' })}
    >
      <Text style={styles.text}>Edit</Text>
    </TouchableOpacity>
  </View>
);

const Pull = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Pull</Text>
    <ScrollView>
      <View style={styles.routinesList}>
        <Text style={styles.routineItem}>Lat Pull Down</Text>
        <Text style={styles.routineItem}>Seated Cable Rows</Text>
        <Text style={styles.routineItem}>Face Pulls</Text>
        <Text style={styles.routineItem}>Preacher Curls</Text>
        <Text style={styles.routineItem}>Hammer Curls</Text>
        {/* Add more routines as needed */}
      </View>
    </ScrollView>
  </View>
);

const Legs = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Legs</Text>
    <ScrollView>
      <View style={styles.routinesList}>
        <Text style={styles.routineItem}>Squats</Text>
        <Text style={styles.routineItem}>Romanian Deadlifts</Text>
        <Text style={styles.routineItem}>Leg Extension</Text>
        <Text style={styles.routineItem}>Glute Bridges</Text>
        <Text style={styles.routineItem}>Hamstring Curls</Text>
        <Text style={styles.routineItem}>Calf Raises</Text>
        {/* Add more routines as needed */}
      </View>
    </ScrollView>
  </View>
);

const ChestBack = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Chest/Back</Text>
    <ScrollView>
      <View style={styles.routinesList}>
        <Text style={styles.routineItem}>Superset: Incline DB Press, Incline DB Row</Text>
        <Text style={styles.routineItem}>Dips</Text>
        <Text style={styles.routineItem}>Wide Grip Lat Pulldown</Text>
        <Text style={styles.routineItem}>Kneeling SA Lat Row</Text>
        <Text style={styles.routineItem}>Superset: DB Bench Press, DB Shrugs</Text>
        <Text style={styles.routineItem}>Cable Flies</Text>
        <Text style={styles.routineItem}>Cable Low Row</Text>
        {/* Add more routines as needed */}
    </View>
    </ScrollView>
  </View>
);

const ShouldersArms = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Shoulders/Arms</Text>
    <ScrollView>
        <View style={styles.routinesList}>
        <Text style={styles.routineItem}>Superset: DB Shoulder Pressm, DB Incline Rear Delt Row</Text>
        <Text style={styles.routineItem}>Superset: Cable Lat Raise, Behind Back Cable Curl</Text>
        <Text style={styles.routineItem}>Superset: Cable Cross Body Tricep Pushdown, Cable Rear Delt Flies</Text>
        <Text style={styles.routineItem}>Superset: DB Spider Curl, SA DB Overhead Extension</Text>
        <Text style={styles.routineItem}>Superset: Cross Body DB Hammer Curl, DB Lat Raise</Text>
        <Text style={styles.routineItem}>Reverse Curls</Text>
        <Text style={styles.routineItem}>Wrist Curls</Text>
        {/* Add more routines as needed */}
      </View>
    </ScrollView>
  </View>
);

const Core = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Core</Text>
    <ScrollView>
      <View style={styles.routinesList}>
        <Text style={styles.routineItem}>Routine 1</Text>
        <Text style={styles.routineItem}>Routine 2</Text>
        <Text style={styles.routineItem}>Routine 3</Text>
        {/* Add more routines as needed */}
      </View>
    </ScrollView>
  </View>
);

const Cardio = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Cardio</Text>
    <ScrollView>
      <View style={styles.routinesList}>
        <Text style={styles.routineItem}>Routine 1</Text>
        <Text style={styles.routineItem}>Routine 2</Text>
        <Text style={styles.routineItem}>Routine 3</Text>
        {/* Add more routines as needed */}
      </View>
    </ScrollView>
  </View>
);

const AddRoutineScreen = ({ navigation }) => {

  const [isModalVisible, setModalVisible] = useState(false);
  const [exerciseDetails, setExerciseDetails] = useState({ title: '', description: '' });
  const [submittedExercises, setSubmittedExercises] = useState([]); // New state for submitted exercises

  const handleAddExercise = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleExerciseSubmit = (title, description) => {
    // Update the submitted exercises array with the new exercise
    const newExercise = { title, description };
    setSubmittedExercises([...submittedExercises, newExercise]);

    setExerciseDetails({ title, description });
    setModalVisible(false);
  };

  const [routineName, setRoutineName] = useState('');

  const handleSaveRoutine = () => {
    if (routineName && submittedExercises.length > 0) {
      const newRoutine = { title: routineName, exercises: submittedExercises };
      navigation.navigate('RoutinesHomeScreen', { newRoutine }); // Pass the newRoutine object
    }
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>

      <Text style={styles.text}>Routine Title:</Text>
        <TextInput
          style={styles.input}
          onChangeText={setRoutineName}
          value={routineName}
          placeholder="Enter routine title"
        />

        {/* Render submitted exercises as a list */}
        {submittedExercises.map((exercise, index) => (
          <View key={index} style={styles.exerciseListItem}>
            <Text style={styles.exerciseTitle}>{exercise.title}</Text>
            <Text style={styles.exerciseDescription}>{exercise.description}</Text>
          </View>
        ))}

        {/* Add Exercise button */}
        <TouchableOpacity style={styles.plusButton} onPress={handleAddExercise}>
          <Text style={styles.plusButtonText}>+</Text>
        </TouchableOpacity>

        {/* Modal */}
        <GraphTitleModal
          isVisible={isModalVisible}
          onClose={handleCloseModal}
          onSubmit={handleExerciseSubmit}
        />
      </ScrollView>
    </View>
  );
};

const RoutinesScreen = () => {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Stack.Navigator>
          <Stack.Screen
          name="RoutinesHomeScreen"
          component={RoutinesHomeScreen}
          options={{ headerShown: false }}
          />
          <Stack.Screen
          name="AddRoutineScreen"
          component={AddRoutineScreen}
          options={{ headerShown: true, title: 'Add Custom Routine' }}
          />
          <Stack.Screen
          name="Push"
          component={Push}
          options={{ headerShown: true }}
          />
          <Stack.Screen
          name="Pull"
          component={Pull}
          options={{ headerShown: true }}
          />
          <Stack.Screen
          name="Legs"
          component={Legs}
          options={{ headerShown: true }}
          />
          <Stack.Screen
          name="Chest/Back"
          component={ChestBack}
          options={{ headerShown: true }}
          />
          <Stack.Screen
          name="Shoulders/Arms"
          component={ShouldersArms}
          options={{ headerShown: true }}
          />
          <Stack.Screen
          name="Core"
          component={Core}
          options={{ headerShown: true }}
          />
          <Stack.Screen
          name="Cardio"
          component={Cardio}
          options={{ headerShown: true }}
          />
          <Stack.Screen
            name="EditRoutineScreen"
            component={EditRoutineScreen}
            options={{ headerShown: true, title: 'Edit Routine' }}
          />
        </Stack.Navigator>
      </ScrollView>
    </View>
  )
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      paddingBottom: 0, // Adjust this value to extend to the navigation bar
      backgroundColor: '#121212',
    },
    headerContainer: {
      flex: 1,
      padding: 0,
      backgroundColor: '#121212',
    },
    scrollContent: {
      flexGrow: 1,
      paddingVertical: 70,
      justifyContent: 'flex-start',
      paddingTop: 30,
    },
    headerWrapper: {
      alignItems: 'center',
      marginTop: 0,
      marginBottom: 20,
    },
    headerText: {
      color: '#ffffff',
      fontSize: 32,
      fontWeight: 'bold',
    },
    textWrapper: {
      backgroundColor: '#a37cf4',
      padding: 10,
      borderRadius: 20,
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: '#fdfbf6',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    buttonText: {
      color: '#fdfbf6',
      fontSize: 24,
      fontWeight: 'bold',
      marginBottom: 10,
      marginTop: 10,
    },
    routinesList: {
      marginTop: 20,
      paddingHorizontal: 20,
    },
    routineItem: {
      color: '#ffffff',
      fontSize: 18,
      marginBottom: 10,
    },
    plusButton: {
      width: 56,
      height: 56,
      borderRadius: 28,
      backgroundColor: '#a37cf4', // Change to your desired color
      justifyContent: 'center',
      alignItems: 'center',
      elevation: 5,
      marginBottom: 10,
      marginLeft: 'auto', // This will center the button horizontally
      marginRight: 'auto', // This will center the button horizontally
    },
    plusButtonText: {
      color: 'white',
      fontSize: 24,
      fontWeight: 'bold',
    },
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      backgroundColor: 'white',
    },
    exerciseListItem: {
      backgroundColor: '#2c2c2c',
      borderRadius: 10,
      padding: 10,
      marginVertical: 5,
    },
    exerciseTitle: {
      color: '#ffffff',
      fontSize: 18,
      fontWeight: 'bold',
    },
    exerciseDescription: {
      color: '#ffffff',
      fontSize: 16,
    },
    editButton: {
      backgroundColor: '#a37cf4',
      paddingVertical: 5, // Adjust padding vertically
      paddingHorizontal: 10, // Adjust padding horizontally
      borderRadius: 15, // Adjust border radius
      width: 80, // Set the width
      marginLeft: 'auto', // Center horizontally
      marginRight: 'auto', // Center horizontally
      marginBottom: 10,
      alignItems: 'center',
      justifyContent: 'center',
    },
});

export default RoutinesScreen;