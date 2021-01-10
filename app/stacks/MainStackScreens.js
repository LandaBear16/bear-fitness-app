import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'

import { colours } from '../config/theme'

import WorkoutGeneratorStack from './WorkoutGeneratorStack'
import ProfileScreen from '../screens/ProfileScreen'


const MainStackScreens = () => {
  const MainTabStack = createBottomTabNavigator()

  return (
    <MainTabStack.Navigator 
    screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
              return <MaterialCommunityIcons name={iconName} size={30} color={color} />
            } else if (route.name === 'ProfileScreen') {
              iconName = focused ? 'person' : 'person-outline';
              return <MaterialIcons name={iconName} size={30} color={color} />
            }

          },
        })}
    tabBarOptions={{
      activeTintColor: colours.iceBlue,
      inactiveTintColor: colours.ming,
      labelStyle:{
        fontSize: 16,
        paddingBottom: 5
      },
      style: {
        backgroundColor: 'white',
        height: 80,
        fontSize: 22
      }
    }} >
      <MainTabStack.Screen name='Home' component={WorkoutGeneratorStack} color={colours.primary} size={50}/>
      <MainTabStack.Screen name='ProfileScreen' component={ProfileScreen} />
    </MainTabStack.Navigator>
  )
}

export default MainStackScreens