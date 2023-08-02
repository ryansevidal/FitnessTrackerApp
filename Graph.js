import React, { useState } from 'react';
import { Dimensions, Text, View, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import Icon from 'react-native-vector-icons/FontAwesome';
import DataInputModal from './DataInputModal';

const chartConfig = {
  backgroundGradientFrom: '#1E2923',
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: '#08130D',
  backgroundGradientToOpacity: 0.25,
  color: (opacity = 1) => `rgba(236, 255, 255, ${opacity})`,
  strokeWidth: 2,
  barPercentage: 0.5,
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
    <View>
      <View style={{ flexDirection: 'row' }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10, color: '#ecffff' }}>{title}</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={handleOpenModal}>
            <Icon name="plus" size={24} color="#ecffff" style={{ marginRight: 15 }} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ paddingLeft: 9 }} onPress={onDelete}>
          <Icon name="trash" size={24} color="#ecffff" />
        </TouchableOpacity>
      </View>
      <LineChart
        data={data}
        width={screenWidth - 40}
        height={220}
        chartConfig={chartConfig}
        style={{ overflow: 'hidden' }}
      //bezier
      />
      <DataInputModal isVisible={isModalVisible} onClose={handleCloseModal} onSubmit={handleAddData} />
    </View>
  );
};

export default Graph;
