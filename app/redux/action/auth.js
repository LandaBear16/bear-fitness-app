import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'
import { firebase } from '../../firebase/config'

const updateUser = createAction(ACTION.UPDATE_USER)

export const setUser = (user) => (dispatch, getState) => {
  dispatch(updateUser(user))
}