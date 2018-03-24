export default function trainingReducer(state = [], action) {
  switch (action.type) {
    case 'ADD_TRAIN':
      return [...state, action.train]
    case 'FETCH_TRAIN_SUCCESS':
      return action.trainings
    default:
      return state
  }
}
