import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'

const updateSort = createAction(ACTION.UPDATE_SORT)


export const updateTest = () => (dispatch, getState) => {
  const state = getState()
  console.log('state', state)
}