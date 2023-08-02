import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Graph from './Graph';

const ExpandableGraphSection = ({ title }) => {
  const [graphs, setGraphs] = useState([
    {
      title: 'Bodyweight',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [20, 45, 28, 80, 99, 43],
            strokeWidth: 2,
          },
        ],
      },
    },
    {
      title: 'Graph 2',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [30, 90, 67, 54, 79, 89],
            strokeWidth: 2,
          },
        ],
      },
    },
  ]);

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

  const handleAddGraph = () => {
    const newGraph = {
      title: `Graph ${graphs.length + 1}`,
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June'],
        datasets: [
          {
            data: [50, 100, 60, 70, 80, 90],
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
    newGraphs[index].data.datasets[0].data.push({ x: date, y: value });
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

  return (
    <View>
      <View style={{ backgroundColor: '#a37cf4', borderRadius: 20, marginBottom: 5 }}>
        <Text style={{ color: '#fdfbf6', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
      </View>
      <ScrollView horizontal>
        {graphs.map((graph, index) => (
          <Graph key={index} title={graph.title} data={graph.data} onDelete={() => handleDeleteGraph(index)} onAdd={(date, value) => handleAddData(index, date, value)} />
        ))}
        <TouchableOpacity style={{ justifyContent: 'center', padding: 10 }} onPress={handleAddGraph}>
          <Icon name="plus" size={24} color="#ecffff" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ExpandableGraphSection;
