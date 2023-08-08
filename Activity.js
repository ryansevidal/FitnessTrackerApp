import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppleHealthKit from 'react-native-health';

const Activity = () => {
  const [calories, setCalories] = useState(null);
  const [moveMinutes, setMoveMinutes] = useState(null);
  const [standGoal, setStandGoal] = useState(null);

  const options = {
    permissions: {
      read: [
        AppleHealthKit.Constants.Permissions.ActiveEnergyBurned,
        AppleHealthKit.Constants.Permissions.AppleExerciseTime,
        AppleHealthKit.Constants.Permissions.AppleStandTime,
      ],
    },
  };

  useEffect(() => {
    AppleHealthKit.initHealthKit(options, (err, results) => {
      if (err) {
        console.error("error initializing Healthkit: ", err);
        return;
      }

      AppleHealthKit.getActiveEnergyBurned({}, (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        setCalories(result.value);
      });

      AppleHealthKit.getAppleExerciseTime({}, (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        setMoveMinutes(result.value);
      });

      AppleHealthKit.getAppleStandTime({}, (err, result) => {
        if (err) {
          console.error(err);
          return;
        }
        setStandGoal(result.value);
      });

    });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calories: {calories}</Text>
      <Text style={styles.text}>Move Minutes: {moveMinutes}</Text>
      <Text style={styles.text}>Stand Goal: {standGoal}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Activity;
