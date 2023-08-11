import React, { useState } from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const LogScreen = () => {
    const [workouts, setWorkouts] = useState([]);

    const handleLogWorkout = () => {
        // This will simply add a new workout with the current date and time
        const newWorkout = `Workout on ${new Date().toLocaleDateString()} at ${new Date().toLocaleTimeString()}`;
        setWorkouts(prevWorkouts => [newWorkout, ...prevWorkouts]);
    };

    return (
        <View style={styles.container}>
            {workouts.length === 0 ? (
                <View style={styles.emptyContainer}>
                    <Text style={styles.emptyText}>No Workouts Logged. Tap the "+" Icon to Log One.</Text>
                </View>
            ) : (
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    {workouts.map((workout, index) => (
                        <View key={index} style={styles.workoutItem}>
                            <Text style={styles.workoutText}>{workout}</Text>
                        </View>
                    ))}
                </ScrollView>
            )}
            <TouchableOpacity style={styles.addButton} onPress={handleLogWorkout}>
                <Icon name="plus" size={24} color="#fff" />
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#121212',
    },
    emptyContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        textAlign: 'center',
        fontSize: 18,
        color: '#777',
    },
    scrollContent: {
        paddingVertical: 20,
    },
    workoutItem: {
        backgroundColor: '#a37cf4',
        padding: 20,
        borderRadius: 20,
        marginTop: 30,
        marginBottom: -20,
    },
    workoutText: {
        fontSize: 20,
        color: '#fdfbf6',
        fontWeight: 'bold',
    },
    addButton: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        backgroundColor: '#007AFF',
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default LogScreen;
