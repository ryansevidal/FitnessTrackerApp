import React, { useState } from 'react';
import { Alert, Modal, View, Button, TextInput, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker'; // use this import instead

const DataInputModal = ({ isVisible, onClose, onSubmit }) => {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [value, setValue] = useState('');

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  const showDatepicker = () => {
    setShow(true);
  };

  const handleOnSubmit = () => {
    if (!value) {
      Alert.alert('Input required', 'Please enter a numeric value');
      return;
    }
    onSubmit(date, parseFloat(value));
    setValue('');
  };

  return (
    <Modal visible={isVisible} onRequestClose={onClose} transparent>
      <View style={{ margin: 50, padding: 20, backgroundColor: '#fff' }}>
        <Button onPress={showDatepicker} title={date.toLocaleDateString()} />
        {show && (
          <DateTimePicker
            testID="dateTimePicker"
            value={date}
            mode="date"
            is24Hour={true}
            display="default"
            onChange={onChange}
          />
        )}
        <TextInput
          value={value}
          placeholder="Enter a numeric value"
          onChangeText={(text) => setValue(text)}
          keyboardType="numeric"
        />
        <Button title="Submit" onPress={handleOnSubmit} />
        <Button title="Close" onPress={onClose} />
      </View>
    </Modal>
  );
};

export default DataInputModal;
