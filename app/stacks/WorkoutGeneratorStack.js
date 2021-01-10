import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Home from '../screens/Home'
import TrainingGoal from '../screens/TrainingGoal'
import EquipmentList from '../screens/EquipmentList'
import MuscleGroup from '../screens/MuscleGroup'
import Levels from '../screens/Levels'
import GeneratedWorkout from '../screens/GeneratedWorkout'
import BeginWorkoutScreen from '../screens/BeginWorkoutScreen'


const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 100,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
}

const WorkoutGeneratorStack = () => {
  const WorkoutStack = createStackNavigator()

  return (
    <WorkoutStack.Navigator screenOptions={{ 
      headerShown: false,
      transitionSpec: {
        open: config,
        close:config
      }
    }} >
      <WorkoutStack.Screen name='Home' component={Home} />
      <WorkoutStack.Screen name='TrainingGoals' component={TrainingGoal} />
      <WorkoutStack.Screen name='EquipmentList' component={EquipmentList} />
      <WorkoutStack.Screen name='MuscleGroup' component={MuscleGroup} />
      <WorkoutStack.Screen name='Levels' component={Levels} />
      <WorkoutStack.Screen name='GeneratedWorkout' component={GeneratedWorkout} />
      <WorkoutStack.Screen name='BeginWorkoutScreen' component={BeginWorkoutScreen} />
    </WorkoutStack.Navigator>
  )
}

export default WorkoutGeneratorStack