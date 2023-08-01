import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const texts = ['Push', 'Pull', 'Legs', 'Upper', 'Lower', 'Core', 'Cardio']

const RoutinesHomeScreen = ({ navigation }) => {
  const handleButtonPress = (routine) => {
    navigation.navigate(routine);
  };
  return (
    <View style={styles.container}>
      {/* Add the text at the top */}
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Your Routines</Text>
      </View>

      {texts.map((routine, index) => (

        <TouchableOpacity 
          style={styles.button} 
          // onPress={handleButtonPress}
          onPress={() => handleButtonPress(routine)}
          >
          <Text style={styles.buttonText}>{routine}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const Push = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Push</Text>
  </View>
);

const Pull = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Pull</Text>
  </View>
);

const Legs = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Legs</Text>
  </View>
);

const Upper = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Upper</Text>
  </View>
);

const Lower = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Lower</Text>
  </View>
);

const Core = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Core</Text>
  </View>
);

const Cardio = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Cardio</Text>
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
                        name="Upper"
                        component={Upper}
                        options={{ headerShown: true }}
                      />
                      <Stack.Screen
                        name="Lower"
                        component={Lower}
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
    color: '#ffffff', // Change the header text color to white (#ffffff)
    fontSize: 32,
    fontWeight: 'bold',
  },
  textWrapper: {
    backgroundColor: '#a37cf4',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
    alignItems: 'center', // Center content horizontally
    justifyContent: 'center', // Center content vertically
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
});

export default RoutinesScreen;