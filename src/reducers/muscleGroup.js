export default function muscleGroupReducer(state = [], action) {
  switch (action.type) {
    case 'FETCH_MUSCLE_GROUPS_SUCCESS':
      return action.muscleGroups
    default:
      return state
  }
}