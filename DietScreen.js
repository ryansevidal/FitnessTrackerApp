import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const DietHomeScreen = ({ navigation }) => {
  const handleButtonPress = () => {
    navigation.navigate('DietAnotherScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Diet Home Screen</Text>
      <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
        <Text style={styles.buttonText}>Go to Another Screen</Text>
      </TouchableOpacity>
    </View>
  );
};

const DietAnotherScreen = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Diet Another Screen</Text>
  </View>
);

const DietScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DietHomeScreen"
        component={DietHomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DietAnotherScreen"
        component={DietAnotherScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#121212',
  },
  text: {
    color: '#ffffff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 20,
    backgroundColor: '#a37cf4',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default DietScreen;
