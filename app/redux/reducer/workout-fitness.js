import * as ACTIONS from '../constant/actions'
import { handleActions } from 'redux-actions'

const initialState = {
  goals: null,
  trainingGoal: '',
  direction: {},
  sort: {},
  tableName: 'Yolanda',
  equipmentList: null,
  selectedEquipment: [],
  muscleGroupList: null,
  selectedMuscleGroup: '',
  levelList: null,
  selectedLevel: '',
  levelDetails: null
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
    }),
    [ACTIONS.SET_MUSCLE_GROUP]: (state, action) => ({
      ...state,
      muscleGroupList: action.payload
    }),
    [ACTIONS.SELECTED_MUSCLE_GROUP]: (state, action) => ({
      ...state,
      selectedMuscleGroup: action.payload
    }),
    [ACTIONS.SET_LEVELS]: (state, action) => ({
      ...state,
      levelList: action.payload
    }),
    [ACTIONS.SELECTED_LEVEL]: (state, action) => ({
      ...state,
      selectedLevel: action.payload
    }),
    [ACTIONS.UPDATE_LEVEL_DETAILS]: (state, action) => ({
      ...state,
      levelDetails: action.payload
    })
  },
  initialState
)
