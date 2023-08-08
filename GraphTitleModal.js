import React, { useState } from 'react';
import { Alert, Modal, View, TouchableOpacity, TextInput, Text, StyleSheet } from 'react-native';

const GraphTitleModal = ({ isVisible, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleOnSubmit = () => {
    if (!title.trim()) {
      Alert.alert('Input required', 'Please enter a title');
      return;
    }
    onSubmit(title);
    setTitle('');
    onClose();
  };

  return (
    <Modal visible={isVisible} onRequestClose={onClose} transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <TextInput
            value={title}
            placeholder="Enter a title"
            style={styles.input}
            onChangeText={(text) => setTitle(text)}
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
  }
});

export default GraphTitleModal;