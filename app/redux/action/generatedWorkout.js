import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'
import { firebase } from '../../firebase/config'

const updateGeneratedWorkout = createAction(ACTION.UPDATE_GENERATED_WORKOUT)

export const setGeneratedWorkout = (wod) => (dispatch, getState) => {
  dispatch(updateGeneratedWorkout(wod))
  const state = getState()
  // console.log('state', state)
}