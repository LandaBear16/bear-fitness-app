import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TrainingGoal from '../screens/TrainingGoal'
import EquipmentList from '../screens/EquipmentList'
import MuscleGroup from '../screens/MuscleGroup'
import Levels from '../screens/Levels'



const WorkoutGeneratorStack = () => {
  const WorkoutStack = createStackNavigator()

  return (
    <WorkoutStack.Navigator screenOptions={{ headerShown: false }} >
      <WorkoutStack.Screen name='TrainingGoals' component={TrainingGoal} />
      <WorkoutStack.Screen name='EquipmentList' component={EquipmentList} />
      <WorkoutStack.Screen name='MuscleGroup' component={MuscleGroup} />
      <WorkoutStack.Screen name='Levels' component={Levels} />
    </WorkoutStack.Navigator>
  )
}

export default WorkoutGeneratorStack