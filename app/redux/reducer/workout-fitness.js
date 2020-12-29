import * as ACTIONS from '../constant/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  direction: {},
  sort: {},
  tableName: null
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
      tableName: action.payload.tableName
    })
  },
  initialState
)
