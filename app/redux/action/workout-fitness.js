import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'

const updateSort = createAction(ACTION.UPDATE_SORT)
const updateGoals = createAction(ACTION.UPDATE_GOALS)


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