import * as ACTIONS from '../constant/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  generatedWorkout: null,
  savedWorkouts: null,
  selectedWorkout: '',
  currentSavedWorkout: ''
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
    }),
    [ACTIONS.SET_SELECTED_WORKOUT]: (state, action) => ({
      ...state,
      selectedWorkout: action.payload,
    }),
    [ACTIONS.CURRENT_SAVED_WORKOUT]: (state, action) => ({
      ...state,
      selectedWorkout: action.payload,
    })
  },
  initialState
)
