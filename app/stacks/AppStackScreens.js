import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { UserContext } from '../context/UserContext'

import AuthStackScreens from './AuthStackScreens'
import Home from '../screens/Home'
import MainStackScreens from './MainStackScreens'

const AppStackScreens = () => {
  const AppStack = createStackNavigator()
  const [user] = useContext(UserContext)

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
    {user.isLoggedIn ? (
        <AppStack.Screen name="Home" component={MainStackScreens} />
    ) : (
      <AppStack.Screen name="Auth" component={AuthStackScreens} />
    )}
    </AppStack.Navigator>
  )
}

export default AppStackScreens