export const addTrain = train => {
  return {type: 'ADD_TRAIN', train}
}

////
const trainings = [
  {
    name: "biceps day",
    comment: "Only exercises for biceps",
    exercises: ["Concentration Curl", "Barbell Curl"]
  },
  {
    name: "arms day",
    comment: "Heavy train on biceps and triceps",
    exercises: ["Dip Machine", "Close-Grip Barbell Bench Press", "Concentration Curl", "Barbell Curl"]
  }
]

const fetchTrainSuccess = trainings => {
  return {type: "FETCH_TRAIN_SUCCESS", trainings}
}

export const fetchTrain = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(fetchTrainSuccess(trainings))
    }, 1000)
  }
}

///
const muscleGroups = [
  {
    name: "Biceps",
    muscles: ["Long Head", "Short Head"],
    desciption: "Biceps muscle group description",
    image: "",
  },
  {
    name: "Triceps",
    muscles: ["Long Head", "Lateral Head", "Medial Head"],
    description: "Triceps muscle group description",
    image: "",
  },
]

const fetchMuscleGroupsSuccess = muscleGroups => {
  return {type: "FETCH_MUSCLE_GROUPS_SUCCESS", muscleGroups}
}

export const fetchMuscleGroups = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch(fetchMuscleGroupsSuccess(muscleGroups))
    }, 1000)
  }
}


/////

const exercises = [
  {
    "name": "Barbell Curl",
    "muscleGroup": "Biceps",
    "mainMuscle": "Long Head",
    "secondaryMuscle": ["Short Head"],
    "description": "",
    "image": "",
  },
  {
    "name": "Concentration Curl",
    "muscleGroup": "Biceps",
    "mainMuscle": "Short Head",
    "secondaryMuscle": ["Long Head"],
    "description": "",
    "image": "",
  },
  {
    "name": "Close-Grip Barbell Bench Press",
    "muscleGroup": "Triceps",
    "mainMuscle": "Long Head",
    "secondaryMuscle": ["Lateral Head", "Medial Head"],
    "description": "",
    "image": "",
  },
  {
    "name": "Dip Machine",
    "muscleGroup": "Triceps",
    "mainMuscle": "Lateral Head",
    "secondaryMuscle": ["Long Head", "Medial Head"],
    "description": "Dip machine",
    "image": "",
  },
]

const getAppropriateExercises = muscleGroups => exercises.filter(exercise => muscleGroups.includes(exercise.muscleGroup))

const fetchExercisesByMuscleGroupsSuccess = exercises => {
  return {type: "FETCH_EXERCISES_SUCCESS", exercises}
}

export const fetchExercises = muscleGroups => {
  return dispatch => {
    setTimeout(() => {
      dispatch(fetchExercisesByMuscleGroupsSuccess(getAppropriateExercises(muscleGroups)))
    }, 1000)
  }
}
