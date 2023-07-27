import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <><StatusBar barStyle="dark-content" hidden={false} backgroundColor="#00BCD4" transulucent={true} /><View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Your Fitness Goal' />
        <Button title='Add' />
      </View>
      <View>
        <Text>List of goals...</Text>
      </View>
    </View></>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    marginTop: 100,
    marginRight: 20,
    marginLeft: 20,
    
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '80%',
    marginRight: 8,
    padding: 8,

  }
});

const bottomNavBar
