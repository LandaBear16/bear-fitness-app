import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'

const updateSort = createAction(ACTION.UPDATE_TRAINING_GOAL)
const updateGoals = createAction(ACTION.UPDATE_GOALS)
const updateEquipmentList = createAction(ACTION.SET_EQUIPMENT_LIST)
const updateSelectedEquipmentList = createAction(ACTION.SELECTED_EQUIPMENT_LIST)
const updateMuscleGroupList = createAction(ACTION.SET_MUSCLE_GROUP)
const updateSelectedMuscleGroup = createAction(ACTION.SELECTED_MUSCLE_GROUP)
const updateLevelList = createAction(ACTION.SET_LEVELS)
const updateSelectedLevel = createAction(ACTION.SELECTED_LEVEL)



export const updateTrainingGoal = (id) => (dispatch, getState) => {
  console.log("🚀 ~ file: workout-fitness.js ~ line 8 ~ updateTest ~ id", id)
  dispatch(updateSort({trainingGoal: id}))
  const state = getState()
  console.log('state update', state)
}

export const setInitialGoals = (goals) => (dispatch, getState) => {
  console.log("🚀 ~ file: workout-fitness.js ~ line 16 ~ setGoals ~ goals", goals)
  dispatch(updateGoals(goals))
  const state = getState()
  console.log('state', state)
}

export const selectedEquipmentList = (list) => (dispatch, getState) => {
  dispatch(updateSelectedEquipmentList(list))
  const state = getState()
  console.log('state selected', state)
}

export const setEquipmentList = (list) => (dispatch, getState) => {
  dispatch(updateEquipmentList(list))
}

export const selectedMuscleGroup = (group) => (dispatch, getState) => {
  dispatch(updateSelectedMuscleGroup(group))
  const state = getState()
  console.log('state muscle', state)
}

export const setMuscleGroupList = (list) => (dispatch, getState) => {
  dispatch(updateMuscleGroupList(list))
}

export const selectedLevel = (level) => (dispatch, getState) => {
  dispatch(updateSelectedLevel(level))
}


export const setLevelList = (list) => (dispatch, getState) => {
  dispatch(updateLevelList(list))
}