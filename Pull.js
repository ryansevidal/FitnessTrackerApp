import React from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Push = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>Pull Screen</Text>
      {/* Add the list of exercises to do */}
    </View>
  );
};

export default Push;