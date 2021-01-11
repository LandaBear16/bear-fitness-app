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
}

export const setInitialGoals = (goals) => (dispatch, getState) => {
  dispatch(updateGoals(goals))
}

export const selectedEquipmentList = (list) => (dispatch, getState) => {
  dispatch(updateSelectedEquipmentList(list))
}

export const setEquipmentList = (list) => (dispatch, getState) => {
  dispatch(updateEquipmentList(list))
}

export const selectedMuscleGroup = (group) => (dispatch, getState) => {
  dispatch(updateSelectedMuscleGroup(group))
}

export const setMuscleGroupList = (list) => (dispatch, getState) => {
  dispatch(updateMuscleGroupList(list))
}

export const selectedLevel = (level) => (dispatch, getState) => {
  dispatch(updateSelectedLevel(level))
}


export const setLevelList = (list) => (dispatch, getState) => {
  dispatch(updateLevelList(list))
}

export const resetWorkoutOptions = () => (dispatch, getState) => {
  dispatch(updateTrainingGoal(''))
  dispatch(selectedEquipmentList([]))
  dispatch(selectedMuscleGroup(''))
  dispatch(selectedLevel(''))
}

export const generateWorkout = () => async (dispatch, getState) => {
  const { 
    trainingGoal,
    selectedEquipment,
    selectedMuscleGroup,
    selectedLevel
  } = getState().workoutFitness


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



  const details = query.data().workout_details

  const [level] = details.filter((item) => {
    return item.level === selectedLevel
  })


  const workout = _.shuffle(exerciseList).slice(0, level.number_of_exercises);

  
  dispatch(updateLevelDetails(level))
  dispatch(setGeneratedWorkout(workout))

}
