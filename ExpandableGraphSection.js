import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import Graph from './Graph';

const ExpandableGraphSection = ({ title }) => {const [graphs, setGraphs] = useState([
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
  };

  return (
    <View>
      <View style={{ backgroundColor: '#a37cf4', borderRadius: 20, marginBottom: 5 }}>
        <Text style={{ color: '#fdfbf6', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
      </View>
      <ScrollView horizontal>
        {graphs.map((graph, index) => (
          <Graph key={index} title={graph.title} data={graph.data} />
        ))}
        <TouchableOpacity style={{ justifyContent: 'center', padding: 10 }} onPress={handleAddGraph}>
          <Icon name="plus" size={24} color="#ecffff" />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default ExpandableGraphSection;
