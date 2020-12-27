import React from 'react';
import { NavigationContainer } from '@react-navigation/native'

import AppStackScreens from './app/stacks/AppStackScreens'
import TestScreen from './app/screens/TestScreen'
import TrainingGoal from './app/screens/TrainingGoal'


export default function App() {
  return (
   <NavigationContainer>
     <AppStackScreens />
   </NavigationContainer>
  );
}

