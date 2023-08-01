import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Push = () => (
  <View style={styles.container}>
    <Text style={styles.text}>Push Screen</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FF0000', // Change the background color to red
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', // Change the text color to white
  },
});

export default Push;