const preexistingRoutines = [
    { title: 'Routine 1', exercises: ['Exercise 1', 'Exercise 2'] },
    { title: 'Routine 2', exercises: ['Exercise 3', 'Exercise 4'] },
    // ... other preexisting routines
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