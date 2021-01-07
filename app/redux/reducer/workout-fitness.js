import * as ACTIONS from '../constant/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  goals: null,
  trainingGoal: '',
  direction: {},
  sort: {},
  tableName: 'Yolanda'
}

export default handleActions(
  {
    [ACTIONS.UPDATE_SORT]: (state, action) => ({
      direction: {
        ...state.direction,
        [action.payload.tableName]: action.payload.direction
      },
      sort: {
        ...state.sort,
        [action.payload.tableName]: action.payload.sort
      },
      trainingGoal: action.payload.trainingGoal
    }),
    [ACTIONS.UPDATE_GOALS]: (state, action) => ({
      goals: action.payload
    })
  },
  initialState
)
