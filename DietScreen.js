import React, { useState } from 'react';
import { View, Text, Button, Modal, TextInput, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Bar } from 'react-native-progress';

const DietScreen = () => {
  const [foodLog, setFoodLog] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [foodName, setFoodName] = useState('');
  const [calories, setCalories] = useState(0);
  const [maxCalories, setMaxCalories] = useState(0);
  const [showMaxCaloriesModal, setShowMaxCaloriesModal] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const toggleMaxCaloriesModal = () => {
    setShowMaxCaloriesModal(!showMaxCaloriesModal);
  };

  const saveMaxCalories = () => {
    if (!isNaN(maxCalories)) {
      setMaxCalories(maxCalories);
      toggleMaxCaloriesModal();
    } else {
      Alert.alert('Invalid Max Calories', 'Please enter a valid number for Max Calories.');
    }
  };

  const addFoodEntry = () => {
    if (foodName && calories) {
      setFoodLog([...foodLog, { foodName, calories }]);
      setFoodName('');
      setCalories('');
      toggleModal();
    } else {
      Alert.alert('Invalid Entry', 'Please enter a valid food name and a valid number for Calories.');
    }
  };

  const totalCalories = foodLog.reduce((total, item) => total + parseFloat(item.calories), 0);

  const progress = maxCalories > 0 ? totalCalories / maxCalories : 0;

  return (
    <View style={styles.container}>
      <View style={styles.headerWrapper}>
        <Text style={styles.headerText}>Diet Tracker</Text>
        <Text style={styles.totalCalories}>Total Calories: {totalCalories} / {maxCalories}</Text>
        <Ionicons
          name="cog-outline"
          size={24}
          color="white"
          style={styles.maxCaloriesButton}
          onPress={toggleMaxCaloriesModal}
        />
        <Bar
          progress={progress} // Progress should be between 0 and 1
          width={null} // Use null to allow automatic width adjustment
          height={10} // Customize the height of the progress bar
          borderColor="#a37cf4" // Customize the border color
          unfilledColor="#121212" // Customize the unfilled part color
          color="#a37cf4" // Customize the filled part color
          borderRadius={0} // Customize the border radius
          style={styles.progressBar}
        />
      </View>
      <TouchableOpacity
        style={styles.textWrapper}
        onPress={toggleModal}
      >
        <Text style={styles.buttonText}>Log Food</Text>
      </TouchableOpacity>
      <FlatList
        data={foodLog}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.foodEntry}>
            <Text style={styles.foodEntryText}>{item.foodName}</Text>
            <Text style={styles.foodEntryText}>Calories: {item.calories}</Text>
          </View>
        )}
      />

      <Modal animationType="slide" transparent={true} visible={isModalVisible}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Log Food</Text>
            <TextInput
              style={styles.input}
              placeholder="Food Name"
              value={foodName}
              onChangeText={(text) => setFoodName(text)}
            />
            <TextInput
              style={styles.input}
              placeholder="Calories"
              value={calories}
              onChangeText={(text) => setCalories(text)}
              keyboardType="numeric"
            />
            <Button title="Add" onPress={addFoodEntry} />
            <Button title="Cancel" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
      <Modal animationType="slide" transparent={true} visible={showMaxCaloriesModal}>
        <View style={styles.modal}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>Set Max Calories</Text>
            <TextInput
              style={styles.input}
              placeholder="Max Calories"
              value={maxCalories}
              onChangeText={(text) => setMaxCalories(text)}
              keyboardType="numeric"
            />
            <Button title="Save" onPress={saveMaxCalories} />
            <Button title="Cancel" onPress={toggleMaxCaloriesModal} />
          </View>
        </View>
      </Modal>
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
    marginBottom: '5%',
  },
  headerText: {
    color: '#ffffff',
    fontSize: 32,
    fontWeight: 'bold',
  },
  maxCaloriesButton: {
    position: 'absolute',
    bottom: '60%',
    left: '92%',
    padding: 5,
    borderRadius: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalCalories: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 10,
  },
  textWrapper: {
    width: '30%',
    height: '6%',
    backgroundColor: '#a37cf4',
    padding: 5,
    borderRadius: 20,
    marginBottom: 20,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fdfbf6',
    fontSize: 15,
    fontWeight: 'bold',
    marginBottom: 4,
    marginTop: 4,
  },
  foodEntry: {
    backgroundColor: '#d7d8d8',
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
  },
  foodEntryText: {
    color: '#000',
  },
  modal: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent', 
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
    width: '80%',
    alignItems: 'center',
  },
  modalHeading: {
    fontSize: 20,
    marginBottom: 10,
  },
  input: {
    width: '80%',
    padding: 10,
    marginBottom: 10,
    borderBottomWidth: 1,
  },
  progressBar: {
    width: '100%',
    marginTop: '4%',
  },
});

export default DietScreen;