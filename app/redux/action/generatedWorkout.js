import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'
import { firebase } from '../../firebase/config'
import { snapshotToArray } from '../../helper/snapshotToArray'
import { updateLevelDetails } from './workout-fitness'
import moment from 'moment'

const updateGeneratedWorkout = createAction(ACTION.UPDATE_GENERATED_WORKOUT)
const updateSavedWorkouts = createAction(ACTION.UPDATE_SAVED_WORKOUTS)
const updatedSelectedWorkout = createAction(ACTION.SET_SELECTED_WORKOUT)
const updateCurrentSavedWorkout = createAction(ACTION.CURRENT_SAVED_WORKOUT)

export const setGeneratedWorkout = (wod) => (dispatch, getState) => {
  dispatch(updateGeneratedWorkout(wod))
}

export const getSavedWorkouts = (user) => async (dispatch, getState) => {
  const saved = await firebase.firestore().collection('saved_workouts').where('user', '==', 'ChlPOwkH61YV9LELK6eTaavdwQD3').get()
  const snapshot = snapshotToArray(saved)


  dispatch(updateSavedWorkouts(snapshot))
}

export const selectedWorkout = (workout) => (dispatch, getState) => {
  dispatch(updatedSelectedWorkout(workout))
  
  if (workout) {
    console.log('state', workout.item.level)
    dispatch(updateLevelDetails(workout.item.level))
    dispatch(setGeneratedWorkout(workout.item.workout))
  }
}

export const deleteWorkout = () => async (dispatch, getState) => {

  const {
    selectedWorkout,
    currentSavedWorkout
  } = getState().generatedWorkout

  const itemToDelete = selectedWorkout ?? currentSavedWorkout

  await firebase.firestore().collection('saved_workouts').doc(itemToDelete).delete()
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

  const response = await firebase.firestore().collection('saved_workouts').add({
    equipment: selectedEquipment,
    level: levelDetails,
    muscle_group: selectedMuscleGroup,
    name: moment(Date.now()).format('LLLL'),
    training_goal: trainingGoal,
    workout: generatedWorkout,
    user
  })

  dispatch(updateCurrentSavedWorkout(response.id))
  dispatch(getSavedWorkouts(user))
}