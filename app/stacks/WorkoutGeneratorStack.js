import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import TrainingGoal from '../screens/TrainingGoal'
import EquipmentList from '../screens/EquipmentList'



const WorkoutGeneratorStack = () => {
  const WorkoutStack = createStackNavigator()

  return (
    <WorkoutStack.Navigator screenOptions={{ headerShown: false }} >
      <WorkoutStack.Screen name='TrainingGoals' component={TrainingGoal} />
      <WorkoutStack.Screen name='EquipmentList' component={EquipmentList} />
    </WorkoutStack.Navigator>
  )
}

export default WorkoutGeneratorStack