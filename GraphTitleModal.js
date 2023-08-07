import React, { useState } from 'react';
import { Alert, Modal, View, Button, TextInput } from 'react-native';

const GraphTitleModal = ({ isVisible, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');

  const handleOnSubmit = () => {
    if (!title) {
      Alert.alert('Input required', 'Please enter a title');
      return;
    }
    onSubmit(title);
    setTitle('');
  };

  return (
    <Modal visible={isVisible} onRequestClose={onClose} transparent>
      <View style={{ margin: 50, padding: 20, backgroundColor: '#fff' }}>
        <TextInput
          value={title}
          placeholder="Enter a title"
          onChangeText={(text) => setTitle(text)}
        />
        <Button title="Submit" onPress={handleOnSubmit} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default GraphTitleModal;
