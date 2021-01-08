import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { UserContext } from '../context/UserContext'

import AuthStackScreens from './AuthStackScreens'
import Home from '../screens/Home'
import WorkoutGeneratorStack from './WorkoutGeneratorStack'

const AppStackScreens = () => {
  const AppStack = createStackNavigator()
  const [user] = useContext(UserContext)
  console.log("🚀 ~ file: AppStackScreens.js ~ line 13 ~ AppStackScreens ~ user", user)

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
    {user.isLoggedIn ? (
        <AppStack.Screen name="Home" component={WorkoutGeneratorStack} />
    ) : (
      <AppStack.Screen name="Auth" component={AuthStackScreens} />
    )}
    </AppStack.Navigator>
  )
}

export default AppStackScreens