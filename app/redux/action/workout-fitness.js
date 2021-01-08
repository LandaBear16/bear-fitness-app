import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'
import { firebase } from '../../firebase/config'

const updateSort = createAction(ACTION.UPDATE_TRAINING_GOAL)
const updateGoals = createAction(ACTION.UPDATE_GOALS)
const updateEquipmentList = createAction(ACTION.SET_EQUIPMENT_LIST)
const updateSelectedEquipmentList = createAction(ACTION.SELECTED_EQUIPMENT_LIST)
const updateMuscleGroupList = createAction(ACTION.SET_MUSCLE_GROUP)
const updateSelectedMuscleGroup = createAction(ACTION.SELECTED_MUSCLE_GROUP)
const updateLevelList = createAction(ACTION.SET_LEVELS)
const updateSelectedLevel = createAction(ACTION.SELECTED_LEVEL)



export const updateTrainingGoal = (id) => (dispatch, getState) => {
  dispatch(updateSort({trainingGoal: id}))
  // const state = getState()
  // console.log('state update', state)
}

export const setInitialGoals = (goals) => (dispatch, getState) => {
  dispatch(updateGoals(goals))
  // const state = getState()
  // console.log('state', state)
}

export const selectedEquipmentList = (list) => (dispatch, getState) => {
  dispatch(updateSelectedEquipmentList(list))
  // const state = getState()
  // console.log('state selected', state)
}

export const setEquipmentList = (list) => (dispatch, getState) => {
  dispatch(updateEquipmentList(list))
}

export const selectedMuscleGroup = (group) => (dispatch, getState) => {
  dispatch(updateSelectedMuscleGroup(group))
  // const state = getState()
  // console.log('state muscle', state)
}

export const setMuscleGroupList = (list) => (dispatch, getState) => {
  dispatch(updateMuscleGroupList(list))
}

export const selectedLevel = (level) => (dispatch, getState) => {
  dispatch(updateSelectedLevel(level))
  // const state = getState()
  // console.log('state level', state)
}


export const setLevelList = (list) => (dispatch, getState) => {
  dispatch(updateLevelList(list))
}

export const generateWorkout = () => async (dispatch, getState) => {
  const { 
    trainingGoal,
    selectedEquipment,
    selectedMuscleGroup,
    selectedLevel
  } = getState().workoutFitness
  console.log('traing', trainingGoal)
  console.log('equip', selectedEquipment)
  console.log('selectedMuscleGroup', selectedMuscleGroup)
  console.log('LEVEL', selectedLevel)

  const query = await firebase.firestore().collection("training_goal").doc(trainingGoal).get()
  const exercises = await firebase.firestore().collection("exercise")
  const bp = await exercises.where('equipment', 'array-contains-any', selectedEquipment).get()


  const exerciseList = []

  bp.docs.map(doc => {
    console.log('doc', doc.data())
  })


  // console.log('data', query.data().workout_details)
  const details = query.data().workout_details

  const [level] = details.filter((item) => {
    return item.level === selectedLevel
  })

  // console.log('level', level)
  // const levelsRef = firebase.firestore().collection('levels');
  // const snapshot = await levelsRef.get();
  // const levelsArray = snapshotToArray(snapshot)
  // const levelsList = sortLevels(levelsArray)
}
