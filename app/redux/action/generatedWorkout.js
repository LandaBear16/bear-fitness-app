import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'
import { firebase } from '../../firebase/config'
import { snapshotToArray } from '../../helper/snapshotToArray'

const updateGeneratedWorkout = createAction(ACTION.UPDATE_GENERATED_WORKOUT)
const updateSavedWorkouts = createAction(ACTION.UPDATE_SAVED_WORKOUTS)

export const setGeneratedWorkout = (wod) => (dispatch, getState) => {
  dispatch(updateGeneratedWorkout(wod))
  const state = getState()
  // console.log('state', state)
}

export const getSavedWorkouts = (user) => async (dispatch, getState) => {
console.log("🚀 ~ file: generatedWorkout.js ~ line 14 ~ getSavedWorkouts ~ user", user)
  const saved = await firebase.firestore().collection('saved_workouts').where('user', '==', user.uid).get()
  const snapshot = snapshotToArray(saved)

  dispatch(updateSavedWorkouts(snapshot))
}

export const saveWorkout = () => async (dispatch, getState) => {
  
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

  console.log('traininggoal', trainingGoal)

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