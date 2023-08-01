import React from 'react';
import { View, Text, StyleSheet, ScrollView, Alert, TouchableOpacity, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import PushScreen from './Push';
import { NavigationContainer } from '@react-navigation/native';
import Push from './Push';

//import {createNativeStackNavigator} from '@react-navigation/native-stack';

//const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{title: 'Welcome'}}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };


const texts = ['Push', 'Pull', 'Legs', 'Upper', 'Lower', 'Core', 'Cardio']

const RoutinesScreen = () => {

  const navigation = useNavigation(); // Get the navigation object using the hook


    const buttonPress = (index) => {
        // Alert.alert(`Button ${texts[index]} pressed`);
        // if (text === 'Push') {
        //   navigation.navigate('Push'); // Navigate to the PushScreen when "Push" button is pressed
        // }
        if (texts[index] === 'Push') {
          navigation.navigate('Push'); // Navigate to the Push when "Push" button is pressed
        }
    };


    // const buttonPress = (text) => {
    //   navigation.navigate(text); // Navigate to the corresponding screen based on the button text
    // };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                {/* Add the text at the top */}
                <View style={styles.headerWrapper}>
                    <Text style={styles.headerText}>Your Routines</Text>
                </View>

                {texts.map((text,index) => (
                    <TouchableOpacity
                        key={index}
                        style={styles.textWrapper}
                        onPress={() => buttonPress(text)}
                    >
                        <Text style={styles.buttonText}>{`${text}`}</Text>
                    </TouchableOpacity>
                    // <Button
                    //   key={index}
                    //   style={styles.textWrapper}
                    //   onPress={() => buttonPress(index)}
                    //   title={text}
                    //   color="#841584"
                    // />
                ))}

                

              {/* <NavigationContainer>
                <Stack.Navigator>
                  <Stack.Screen
                    name="Push"
                    component={Push}
                    options={{title: 'Welcome'}}
                  />
                </Stack.Navigator>
              </NavigationContainer> */}

            </ScrollView>
        </View>
    )
};

// const Push = ( {navigation, route}) => {
//   return <Text>this is {route.params.name}'s profile</Text>
// }


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
//   text: {
//     color: '#fdfbf6',
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 10,
//   },
//   button: {
//     backgroundColor: '#fff', // Customize the button background color
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//     borderRadius: 20,
//   },
  buttonText: {
    color: '#fdfbf6',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    marginTop: 10,    
  },
});

export default RoutinesScreen;