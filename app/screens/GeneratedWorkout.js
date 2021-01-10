import * as BUTTON_TITLES from '../common/constants/ButtonTitles'
import * as SCREEN_NAMES from '../common/constants/ScreenNames'
import * as MESSAGES from '../common/constants/progressMessage'
import * as TITLE from '../common/constants/titleScreenNames'
import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { generateWorkout } from '../redux/action/workout-fitness'
import { saveWorkout } from '../redux/action/generatedWorkout'

import AppBlock from '../components/AppBlock'
import AppButtonBasic from '../components/AppButtonBasic'
import AppText from '../components/AppText'
import BottomNavigationButtons from '../components/BottomNavigationButtons'
import AppHeader from '../components/AppHeader'
import LinearGradientScreen from '../components/LinearGradientScreen'
import Screen from '../components/Screen'


import {colours, sizes} from "../config/theme"

const GeneratedWorkout = ({ navigation }) => {
  const { generatedWorkout } = useSelector(state => state.generatedWorkout)
  const { levelDetails } = useSelector(state => state.workoutFitness)
  const dispatch = useDispatch()
  const workoutGenerator = workout => dispatch(generateWorkout())
  const saveWod = () => dispatch(saveWorkout())


  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{levelDetails.reps} x {title}</Text>
    </View>
  )

  const renderItem = ({ item }) => {
    return <Item title={item.name} />
  }

  const addSavedWorkout = () => {
    console.log('here', )
    saveWod()
  }

  return (
    <Screen style={styles.container}>
    <LinearGradientScreen />
      {levelDetails && <AppHeader screenName={SCREEN_NAMES.LEVELS} refresh={true} backButton={true} save={true} title={`${levelDetails.sets} sets of`} />}
      <AppBlock style={styles.scrollContainer}>
      <SafeAreaView
          style={{ paddingVertical: sizes.base * 2 }}
        >
        { generatedWorkout && <FlatList
          data={generatedWorkout}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
        }
        </SafeAreaView>
        </AppBlock>
        <View style={styles.border}>
          <AppButtonBasic title='Refresh' onPress={workoutGenerator}/>
          <AppButtonBasic title='Back' onPress={() => navigation.navigate('Levels')} />
          <AppButtonBasic title='Begin Workout' onPress={() => navigation.navigate('BeginWorkoutScreen')} />
          <AppButtonBasic title='Save' onPress={addSavedWorkout} />
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  scrollContainer: {
    flex: 9,
  },
  item: {
    backgroundColor: colours.light,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6
  },
  title: {
    fontSize: 20,
  },
  border: {
    borderWidth: 6,
    borderColor: "#20232a",
    borderRadius: 6,
  }
})

export default GeneratedWorkout
