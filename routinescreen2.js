import React, { useEffect, useState } from 'react';
import { ScrollView, Button } from 'react-native';
import { getPreexistingRoutines, getAllRoutines } from './routinesData';

const RoutinesScreen = ({ navigation }) => {
  const [allRoutines, setAllRoutines] = useState([]);

  const fetchRoutines = () => {
    const routines = getAllRoutines();
    setAllRoutines(routines);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchRoutines);
    return unsubscribe;
  }, [navigation]);

  // Fetch routines initially when the screen loads
  useEffect(() => {
    fetchRoutines();
  }, []);

  const navigateToRoutineDetail = (routine) => {
    navigation.navigate('RoutineDetailScreen', { routine });
  };

  const navigateToCreateRoutine = () => {
    navigation.navigate('CreateRoutineScreen');
  };

  return (
    <ScrollView>
      {allRoutines.map((routine, index) => (
        <Button
          key={index}
          title={routine.title}
          onPress={() => navigateToRoutineDetail(routine)}
        />
      ))}
      <Button title="Create New Routine" onPress={navigateToCreateRoutine} />
    </ScrollView>
  );
};

export default RoutinesScreen;