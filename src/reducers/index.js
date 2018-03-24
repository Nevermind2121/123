import {combineReducers} from 'redux'

import training from './training'
import muscleGroup from './muscleGroup'
import exercise from './exercise'

export default combineReducers({
  training,
  muscleGroup,
  exercise
})
