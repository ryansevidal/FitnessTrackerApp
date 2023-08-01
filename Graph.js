import React from 'react';
import { Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.25,
  color: (opacity = 1) => `rgba(236, 255, 255, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5,
  useShadowColorFromDataset: false, // optional
};

const screenWidth = Dimensions.get('window').width;

const Graph = ({ title, data, onDelete }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#ecffff' }}>{title}</Text>
        <TouchableOpacity onPress={onDelete}>
          <Icon name="trash" size={24} color="#ecffff" />
        </TouchableOpacity>
      </View>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
        chartConfig={chartConfig}
      //bezier
      />
    </View>
  );
};

export default Graph;
