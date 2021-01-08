import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'

const updateSort = createAction(ACTION.UPDATE_TRAINING_GOAL)
const updateGoals = createAction(ACTION.UPDATE_GOALS)
const updateEquipmentList = createAction(ACTION.SET_EQUIPMENT_LIST)
const updateSelectedEquipmentList = createAction(ACTION.SELECTED_EQUIPMENT_LIST)


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