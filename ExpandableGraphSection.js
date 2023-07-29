import React, { useState } from 'react';
import { TouchableOpacity, View, Text, ScrollView } from 'react-native';
import Graph from './Graph';

const ExpandableGraphSection = ({ title }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handlePress = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <View>
      <TouchableOpacity onPress={handlePress} style={{ padding: 10, backgroundColor: '#a37cf4', borderRadius: 20, marginBottom: 10 }}>
        <Text style={{ color: '#fdfbf6', fontSize: 24, fontWeight: 'bold', marginBottom: 10 }}>{title}</Text>
      </TouchableOpacity>
      {isExpanded && (
        <ScrollView horizontal>
          {/* Here you can map over your data to create as many graphs as you want */}
          <Graph title="Graph 1" />
          <Graph title="Graph 2" />
          <Graph title="Graph 3" />
          {/* ... */}
        </ScrollView>
      )}
    </View>
  );
};

export default ExpandableGraphSection;
