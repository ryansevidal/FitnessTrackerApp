import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const texts = ['Push', 'Pull', 'Legs', 'Chest/Back', 'Shoulders/Arms', 'Core', 'Cardio']

const RoutinesHomeScreen = ({ navigation }) => {
  const handleButtonPress = (routine) => {
    navigation.navigate(routine);
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
        style={styles.textWrapper}
        // onPress={handleButtonPress}
        onPress={() => handleButtonPress(routine)}
      >
        <Text style={styles.buttonText}>{routine}</Text>
      </TouchableOpacity>
      ))}
      </ScrollView>
    </View>
  );
};

const Push = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Push</Text>
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

const Pull = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Pull</Text>
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

const Legs = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Legs</Text>
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

const ChestBack = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Chest/Back</Text>
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

const ShouldersArms = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Shoulders/Arms</Text>
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
        </Stack.Navigator>
      </ScrollView>
    </View>
  )
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
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
      justifyContent: 'top',
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
});

export default RoutinesScreen;