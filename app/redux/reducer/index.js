import { combineReducers } from 'redux'

import auth from './auth'
import workoutFitness from './workout-fitness'
import generatedWorkout from './generatedWorkout'

export default combineReducers({
  auth,
  workoutFitness,
  generatedWorkout
})