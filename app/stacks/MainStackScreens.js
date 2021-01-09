import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/TrainingGoal'
import EquipmentList from '../screens/EquipmentList'
import MuscleGroup from '../screens/MuscleGroup'
import Levels from '../screens/Levels'
import GeneratedWorkout from '../screens/GeneratedWorkout'
import BeginWorkoutScreen from '../screens/BeginWorkoutScreen'



const MainStackScreens = () => {
  const MainStack = createStackNavigator()

  return (
    <MainStack.Navigator screenOptions={{ headerShown: false }} >
      <MainStack.Screen name='TrainingGoals' component={TrainingGoal} />
      <MainStack.Screen name='EquipmentList' component={EquipmentList} />
      <MainStack.Screen name='MuscleGroup' component={MuscleGroup} />
      <MainStack.Screen name='Levels' component={Levels} />
      <MainStack.Screen name='GeneratedWorkout' component={GeneratedWorkout} />
      <MainStack.Screen name='BeginWorkoutScreen' component={BeginWorkoutScreen} />
    </MainStack.Navigator>
  )
}

export default MainStackScreens