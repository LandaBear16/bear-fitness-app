import * as ACTIONS from '../constant/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  user: null
}

export default handleActions(
  {
    [ACTIONS.UPDATE_USER]: (state, action) => ({
      ...state,
      user: action.payload,
    })
  },
  initialState
)
