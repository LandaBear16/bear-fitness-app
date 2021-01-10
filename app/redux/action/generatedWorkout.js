import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'
import { firebase } from '../../firebase/config'
import { snapshotToArray } from '../../helper/snapshotToArray'

const updateGeneratedWorkout = createAction(ACTION.UPDATE_GENERATED_WORKOUT)
const updateSavedWorkouts = createAction(ACTION.UPDATE_SAVED_WORKOUTS)
const updatedSelectedWorkout = createAction(ACTION.SET_SELECTED_WORKOUT)

export const setGeneratedWorkout = (wod) => (dispatch, getState) => {
  dispatch(updateGeneratedWorkout(wod))
  const state = getState()
  // console.log('state', state)
}

export const getSavedWorkouts = (user) => async (dispatch, getState) => {
console.log("🚀 ~ file: generatedWorkout.js ~ line 14 ~ getSavedWorkouts ~ user", user)
  const saved = await firebase.firestore().collection('saved_workouts').where('user', '==', 'ChlPOwkH61YV9LELK6eTaavdwQD3').get()
  const snapshot = snapshotToArray(saved)

  dispatch(updateSavedWorkouts(snapshot))
}

export const selectedWorkout = (workout) => (dispatch, getState) => {
  console.log('workout', workout)
  dispatch(updatedSelectedWorkout(workout))
// console.log("🚀 ~ file: generatedWorkout.js ~ line 24 ~ selectedWorkout ~ workout", workout)

}

export const deleteWorkout = () => async (dispatch, getState) => {

  const {
    selectedWorkout
  } = getState().generatedWorkout

  console.log('selectedworkout to delete', selectedWorkout)
  await firebase.firestore().collection('saved_workouts').doc(selectedWorkout).delete()
}

export const saveWorkout = (user) => async (dispatch, getState) => {
  
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


  const response = await firebase.firestore().collection('saved_workouts').add({
    equipment: selectedEquipment,
    level: levelDetails,
    muscle_group: selectedMuscleGroup,
    name: 'test1',
    training_goal: trainingGoal,
    workout: generatedWorkout,
    user: 'ChlPOwkH61YV9LELK6eTaavdwQD3'
  })

  console.log('response', response.id)
}