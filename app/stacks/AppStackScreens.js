import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import AuthStackScreens from './AuthStackScreens'

const AppStackScreens = () => {
  const AppStack = createStackNavigator()

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
      <AppStack.Screen name="Auth" component={AuthStackScreens} />
    </AppStack.Navigator>
  )
}

export default AppStackScreens