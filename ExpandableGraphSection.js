import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Graph from './Graph';
import GraphTitleModal from './GraphTitleModal';

const ExpandableGraphSection = ({ title }) => {

  const [isTitleModalVisible, setTitleModalVisible] = useState(false);

  const handleOpenTitleModal = () => setTitleModalVisible(true);
  const handleCloseTitleModal = () => setTitleModalVisible(false);

  const screenWidth = Dimensions.get('window').width;

  const [graphs, setGraphs] = useState([
    {
      title: 'Bodyweight',
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            strokeWidth: 2,
          },
        ],
      },
    },
  ]);

  const resetGraphs = () => {
    setGraphs(initialGraphs);
    saveData(initialGraphs); // This will overwrite the saved data with the initial state
  };


  const saveData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('@storage_Key', jsonValue)
    } catch (e) {
      // saving error
      console.log(e);
    }
  }

  const loadData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@storage_Key')
      return jsonValue != null ? JSON.parse(jsonValue) : null;
    } catch (e) {
      // error reading value
      console.log(e);
    }
  }

  const handleDeleteGraph = (index) => {
    Alert.alert(
      'Delete Graph',
      'Are you sure you want to delete this graph?',
      [
        {
          text: 'Cancel',
          style: 'cancel'
        },
        {
          text: 'OK', onPress: () => {
            const newGraphs = [...graphs];
            newGraphs.splice(index, 1);
            setGraphs(newGraphs);
            saveData(newGraphs);
          }
        }
      ],
      { cancelable: true }
    );
  };

  const handleAddGraph = (title) => {
    const newGraph = {
      title: title,
      data: {
        labels: [],
        datasets: [
          {
            data: [],
            strokeWidth: 2,
          },
        ],
      },
    };
    setGraphs([...graphs, newGraph]);
    saveData([...graphs, newGraph]);
  };

  const handleAddData = (index, date, value) => {
    const newGraphs = [...graphs];
    newGraphs[index].data.labels.push(date.toLocaleDateString());
    newGraphs[index].data.datasets[0].data.push(value);
    setGraphs(newGraphs);
    saveData(newGraphs);
  };

  useEffect(() => {
    const fetchData = async () => {
      const data = await loadData();
      if (data) {
        setGraphs(data);
      }
    };
    fetchData();
  }, []);

  const itemStyle = {
    height: 260,
    width: screenWidth - 55,
    marginRight: 10,
    justifyContent: 'space-between',
  }

  return (
    <View>
      <View style={{ backgroundColor: '#a37cf4', borderRadius: 20, marginBottom: 5 }}>
        <Text style={{ color: '#fdfbf6', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={true}>
        {graphs.map((graph, index) => (
          <View key={index} style={itemStyle}>
            <Graph title={graph.title} data={graph.data} onDelete={() => handleDeleteGraph(index)} onAdd={(date, value) => handleAddData(index, date, value)} />
          </View>
        ))}
        <TouchableOpacity style={{ justifyContent: 'center', padding: 10 }} onPress={handleOpenTitleModal}>
          <Icon name="plus" size={24} color="#ecffff" />
        </TouchableOpacity>
      </ScrollView>
      <GraphTitleModal isVisible={isTitleModalVisible} onClose={handleCloseTitleModal} onSubmit={handleAddGraph} />
    </View>
  );
};


export default ExpandableGraphSection;
