import { combineReducers } from 'redux'

import workoutFitness from './workout-fitness'
import generatedWorkout from './generatedWorkout'

export default combineReducers({
  workoutFitness,
  generatedWorkout
})