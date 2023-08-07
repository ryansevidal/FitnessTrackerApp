import React, { useState } from 'react';
import { Dimensions, Text, View, TouchableOpacity, Button } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataInputModal from './DataInputModal';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.05,
  color: (opacity = 1) => `rgba(236, 255, 255, ${opacity})`,
  strokeWidth: 2,
  useShadowColorFromDataset: false,
};

const screenWidth = Dimensions.get('window').width;

const Graph = ({ title, data, onDelete, onAdd }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => setModalVisible(true);
  const handleCloseModal = () => setModalVisible(false);

  const handleAddData = (date, value) => {
    handleCloseModal();
    onAdd(date, value);
  };

  return (
    <View style={{ width: screenWidth - 55 }}>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: screenWidth - 108}}>
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 3, marginBottom: 10, color: '#ecffff' }}>{title}</Text>
        </View>
        <View style={{ width: screenWidth, flexDirection: 'row' }}>
          <TouchableOpacity onPress={handleOpenModal}>
            <Icon name="plus" size={24} color="#ecffff" style={{ marginRight: 9 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{}} onPress={onDelete}>
            <Icon name="trash" size={24} color="#ecffff" />
          </TouchableOpacity>
        </View>
      </View>
      {data.datasets[0].data.length === 0 ? (
        <Text style={{ color: '#ecffff', textAlign: 'center', margin: 40, fontSize: 16 }}>No data available. Tap "+" to add data.</Text>
      ) : (
        <LineChart
          data={data}
          width={screenWidth - 55}
          height={220}
          chartConfig={chartConfig}
          style={{ borderRadius: 20, overflow: 'hidden' }}
        />
      )}
      <DataInputModal isVisible={isModalVisible} onClose={handleCloseModal} onSubmit={handleAddData} />
    </View>
  );
};

export default Graph;
