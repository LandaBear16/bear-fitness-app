import * as ACTIONS from '../constant/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  generatedWorkout: null
}

export default handleActions(
  {
    [ACTIONS.UPDATE_GENERATED_WORKOUT]: (state, action) => ({
      ...state,
      generatedWorkout: action.payload,
    })
  },
  initialState
)
