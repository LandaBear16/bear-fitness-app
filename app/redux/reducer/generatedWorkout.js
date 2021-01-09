import * as ACTIONS from '../constant/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  generatedWorkout: null
}

export default handleActions(
  {
    [ACTIONS.UPDATE_TRAINING_GOAL]: (state, action) => ({
      ...state,
      trainingGoal: action.payload.trainingGoal,
    })
  },
  initialState
)
