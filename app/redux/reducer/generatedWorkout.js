import * as ACTIONS from '../constant/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  generatedWorkout: null,
  savedWorkouts: null
}

export default handleActions(
  {
    [ACTIONS.UPDATE_GENERATED_WORKOUT]: (state, action) => ({
      ...state,
      generatedWorkout: action.payload,
    }),
    [ACTIONS.UPDATE_SAVED_WORKOUTS]: (state, action) => ({
      ...state,
      savedWorkouts: action.payload,
    })
  },
  initialState
)
