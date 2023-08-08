import React, { useState } from 'react';
import { Alert, Modal, View, TouchableOpacity, TextInput, Text, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

const DataInputModal = ({ isVisible, onClose, onSubmit }) => {
  const [date, setDate] = useState(new Date());
  const [value, setValue] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const handleOnSubmit = () => {
    if (!value) {
      Alert.alert('Input required', 'Please enter a numeric value');
      return;
    }
    onSubmit(date, parseFloat(value));
    setValue('');
    onClose();
  };

  return (
    <Modal visible={isVisible} onRequestClose={onClose} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.title}> Add New Data </Text>
          <View style={styles.dateTimePickerContainer}>
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}
            />
          </View>
          <TextInput
            value={value}
            placeholder="Enter a numeric value"
            onChangeText={(text) => setValue(text)}
            keyboardType="numeric"
            style={styles.input}
          />
          <View style={styles.buttonsContainer}>
            <TouchableOpacity style={styles.button} onPress={onClose}>
              <Text style={styles.buttonText}>Close</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={handleOnSubmit}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    padding: 20,
    backgroundColor: '#fff',
    borderRadius: 15,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#121212'
  },
  input: {
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 20,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    backgroundColor: '#a37cf4',
    padding: 10,
    borderRadius: 10,
    marginHorizontal: 5,
    width: '45%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  dateButton: {
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 10,
    width: '100%',
    marginBottom: 20,
    alignItems: 'center',
  },
  dateText: {
    color: '#000',
  },
  dateTimePickerContainer: {
    marginBottom: 20,
    padding: 5,
    borderRadius: 10,
    width: '100%',
    alignItems: 'center'
  }
});

export default DataInputModal;
