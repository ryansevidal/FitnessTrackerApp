const preexistingRoutines = [
    { title: 'Push', exercises: ['Bench Press', 'Shoulder Press', 'Dips', 'Incline Dumbell Press', 'Lateral Raises', 'Tricep Pulldown'] },
    { title: 'Pull', exercises: ['Lat Pull Down', 'Seated Cable Rows', 'Face Pulls', 'Preacher Curls', 'Hammer Curls'] },
    { title: 'Legs', exercises: ['Squats', 'Romanian Deadlifts', 'Leg Extension', 'Glute Bridges', 'Hamstring Curls', 'Calf Raises'] },
    { title: 'Chest/Back', exercises: ['Superset: Incline DB Press, Incline DB Row', 'Dips', 'Wide Grip Lat Pulldown', 'Kneeling SA Lat Row', 'Superset: DB Bench Press, DB Shrugs', 'Cable Flies', 'Cable Low Row'] },
    { title: 'Shoulders/Arms', exercises: ['Superset: DB Shoulder Pressm, DB Incline Rear Delt Row', 'Superset: Cable Lat Raise, Behind Back Cable Curl', 'Superset: Cable Cross Body Tricep Pushdown, Cable Rear Delt Flies', 'Superset: DB Spider Curl, SA DB Overhead Extension', 'Superset: Cross Body DB Hammer Curl, DB Lat Raise', 'Reverse Curls', 'Wrist Curls'] },
    { title: 'Core', exercises: [''] },
    { title: 'Cardio', exercises: [''] },
  ];
  
// Initializes an array to hold all routines, including the preexisting ones
let allRoutines = [...preexistingRoutines];

  export const getPreexistingRoutines = () => {
    return preexistingRoutines;
  };
  
  export const getAllRoutines = () => {
    return allRoutines;
  };
  
  export const addRoutine = (routine) => {
    // Add the new routine to the array
    allRoutines.push(routine);
  };
  
  export const deleteRoutine = (routineTitle) => {
    // Remove the routine from the array based on title
    const index = allRoutines.findIndex((routine) => routine.title === routineTitle);
    if (index !== -1) {
      allRoutines.splice(index, 1);
    }
  };