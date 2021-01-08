import * as ACTIONS from '../constant/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  goals: null,
  trainingGoal: '',
  direction: {},
  sort: {},
  tableName: 'Yolanda',
  equipmentList: null,
  selectedEquipment: []
}

export default handleActions(
  {
    [ACTIONS.UPDATE_TRAINING_GOAL]: (state, action) => ({
      ...state,
      trainingGoal: action.payload.trainingGoal,
    }),
    [ACTIONS.UPDATE_GOALS]: (state, action) => ({
      ...state,
      goals: action.payload
    }),
    [ACTIONS.SET_EQUIPMENT_LIST]: (state, action) => ({
      ...state,
      equipmentList: action.payload
    }),
    [ACTIONS.SELECTED_EQUIPMENT_LIST]: (state, action) => ({
      ...state,
      selectedEquipment: action.payload
    })
  },
  initialState
)
