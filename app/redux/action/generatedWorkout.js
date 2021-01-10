import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'
import { firebase } from '../../firebase/config'

const updateGeneratedWorkout = createAction(ACTION.UPDATE_GENERATED_WORKOUT)

export const setGeneratedWorkout = (wod) => (dispatch, getState) => {
  dispatch(updateGeneratedWorkout(wod))
  const state = getState()
  // console.log('state', state)
}

export const saveWorkout = () => async (dispatch, getState) => {
  console.log('boom', getState())
  
  const { 
    workoutFitness: {
      trainingGoal,
      selectedEquipment,
      selectedMuscleGroup,
      levelDetails
    },
    generatedWorkout: {
      generatedWorkout
    }
  } = getState()

  // const {
  //   trainingGoal,
  //   selectedEquipment,
  //   selectedMuscleGroup,
  //   levelDetails
  // } = getState().workoutFitness

  // console.log({trainingGoal, selectedEquipment, selectedMuscleGroup, levelDetails, generatedWorkout})


  // await firebase.firestore().collection('saved_workouts').add({
  //   equipment: selectedEquipment,
  //   level: levelDetails,
  //   muscle_group: selectedMuscleGroup,
  //   name: 'test1',
  //   training_goal: trainingGoal,
  //   workout: generatedWorkout
  // })
}