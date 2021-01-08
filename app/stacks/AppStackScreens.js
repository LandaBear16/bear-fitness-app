import React, { useContext } from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { UserContext } from '../context/UserContext'

import AuthStackScreens from './AuthStackScreens'
import Home from './app/screens/Home'

const AppStackScreens = () => {
  const AppStack = createStackNavigator()
  const [user] = useContext(UserContext)

  return (
    <AppStack.Navigator screenOptions={{ headerShown: false }} >
    {user.isLoggedIn === null ? (
        <AppStack.Screen name="Loading" component={LoadingScreen} />
    ) : user.isLoggedIn ? (
        <AppStack.Screen name="Home" component={Home} />
    ) : (
      <AppStack.Screen name="Auth" component={AuthStackScreens} />
    )}
    </AppStack.Navigator>
  )
}

export default AppStackScreens