import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ExpandableGraphSection from './ExpandableGraphSection';

const texts = ['Goals (Graphs)', 'Placeholder 2', 'Placeholder 3', 'Placeholder 4']

const ProfileScreen = () => {
  return (
    <View style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
            {texts.map((text,index) => (
                <View key={index}  style={styles.textWrapper}>
                    <ExpandableGraphSection key={index} title={text} />
                </View>   
            ))}
        </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212',
  },
  scrollContent: {
    flexGrow: 1,
    paddingVertical: 70,
    justifyContent: 'top',
    
  },
  textWrapper: {
    backgroundColor: '#a37cf4',
    padding: 10,
    borderRadius: 20,
    marginBottom: 10,
  },
  text: {
    color: '#fdfbf6',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default ProfileScreen;
