import React from 'react';
import { Dimensions, Text, View } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

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

const Graph = ({ title, data }) => (
  <View>
    <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#ecffff' }}>{title}</Text>
    <LineChart
      data={data}
      width={screenWidth}
      height={220}
      chartConfig={chartConfig}
      //bezier
    />
  </View>
);

export default Graph;
