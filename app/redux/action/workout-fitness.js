import * as ACTION from '../constant/actions'
import { createAction } from 'redux-actions'
import { firebase } from '../../firebase/config'
import _ from 'lodash'


import { setGeneratedWorkout } from './generatedWorkout'

const updateSort = createAction(ACTION.UPDATE_TRAINING_GOAL)
const updateGoals = createAction(ACTION.UPDATE_GOALS)
const updateEquipmentList = createAction(ACTION.SET_EQUIPMENT_LIST)
const updateSelectedEquipmentList = createAction(ACTION.SELECTED_EQUIPMENT_LIST)
const updateMuscleGroupList = createAction(ACTION.SET_MUSCLE_GROUP)
const updateSelectedMuscleGroup = createAction(ACTION.SELECTED_MUSCLE_GROUP)
const updateLevelList = createAction(ACTION.SET_LEVELS)
const updateSelectedLevel = createAction(ACTION.SELECTED_LEVEL)
const updateLevelDetails = createAction(ACTION.UPDATE_LEVEL_DETAILS)



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
console.log("🚀 ~ file: workout-fitness.js ~ line 34 ~ selectedEquipmentList ~ list", list)
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

export const resetWorkoutOptions = () => (dispatch, getState) => {
  dispatch(updateTrainingGoal(''))
  dispatch(selectedEquipmentList([]))
  dispatch(selectedMuscleGroup(''))
  dispatch(selectedLevel(''))
  console.log('state', getState().workoutFitness)
}

export const generateWorkout = () => async (dispatch, getState) => {

  const { 
    trainingGoal,
    selectedEquipment,
    selectedMuscleGroup,
    selectedLevel
  } = getState().workoutFitness
  // console.log('traing', trainingGoal)
  // console.log('equip', selectedEquipment)
  // console.log('selectedMuscleGroup', selectedMuscleGroup)
  // console.log('LEVEL', selectedLevel)

  const query = await firebase.firestore().collection("training_goal").doc(trainingGoal).get()
  const exercises = await firebase.firestore().collection("exercise")

  let exerciseQuery

  if (selectedMuscleGroup === 'gEYMgi3jiofm2Qd0h2Ev') {
    exerciseQuery = exercises.where('equipment', 'array-contains-any', selectedEquipment).get()
  } else {
    exerciseQuery = exercises.where('muscle_group', '==', selectedMuscleGroup).where('equipment', 'array-contains-any', selectedEquipment).get()
  }
  const bp = await exerciseQuery


  const exerciseList = []

 bp.docs.map(doc => {
    const data = doc.data()
    // console.log('data', data)
    if (data.equipment.length == 1 && _.includes(data.training_goal, trainingGoal)) {
      exerciseList.push(data)
    } else if (data.equipment.length > 1) {
      const checkAllEquip = data.equipment.map((equip) => {
        return _.includes(selectedEquipment, equip)
      })
      if (!_.includes(checkAllEquip, false) && _.includes(data.training_goal, trainingGoal)) {
        exerciseList.push(data)
      }
    }
  })

  // console.log('exerciseList', exerciseList)

  const details = query.data().workout_details

  const [level] = details.filter((item) => {
    return item.level === selectedLevel
  })

  console.log('level', level)
  // const workout = []

  const workout = _.shuffle(exerciseList).slice(0, level.number_of_exercises);
  console.log("🚀 ~ file: workout-fitness.js ~ line 122 ~ generateWorkout ~ workout", workout)

  
  dispatch(updateLevelDetails(level))
  dispatch(setGeneratedWorkout(workout))
  // console.log('workout', workout)
  
  console.log('-------------')

}
