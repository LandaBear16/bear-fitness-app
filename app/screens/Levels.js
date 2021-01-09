import * as BUTTON_TITLES from '../common/constants/ButtonTitles'
import * as SCREEN_NAMES from '../common/constants/ScreenNames'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { firebase } from '../firebase/config'
import { selectedLevel, setLevelList, generateWorkout } from '../redux/action/workout-fitness'
import { snapshotToArray } from '../helper/snapshotToArray'

import AppBlock from '../components/AppBlock'
import AppCard from '../components/AppCard'
import AppText from '../components/AppText'
import BottomNavigationButtons from '../components/BottomNavigationButtons'
import {sizes} from "../config/theme";
import Screen from '../components/Screen'

const { width } = Dimensions.get("window")

const Levels = ({ navigation }) => {
  const [selected, setSelected] = useState(null)
  const { levelList } = useSelector(state => state.workoutFitness)
  const dispatch = useDispatch()
  const addLevel = group => dispatch(selectedLevel(group))
  const setLevelArray = muscleArr => dispatch(setLevelList(muscleArr))
  const workoutGenerator = workout => dispatch(generateWorkout())

  useEffect(() => {
    getLevels()
  }, [])

  const getLevels = async () => {
    const levelsRef = firebase.firestore().collection('levels');
    const snapshot = await levelsRef.get();
    const levelsArray = snapshotToArray(snapshot)
    const levelsList = sortLevels(levelsArray)
    setLevelArray(levelsList)
  }

  const sortLevels = (levelsList) => {
    return levelsList.sort((a,b) => {
      return a.item.name === 'Advanced' ? 1 : -1
    })
  }


  const handleSelected = (id) => {
    setSelected(id)
    addLevel(id)
  }

  const activeButton = (key) => {
    return selected === key ? 'plight' : 'gray'
  }

  return (
    <Screen style={styles.container}>
    <AppText primary height={20} h1 center bold style={styles.header}>Select your Fitness Level:</AppText>
    <AppBlock style={styles.scrollContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: sizes.base * 2 }}
        >
          <AppBlock flex={false} row space="between" style={styles.goals}>
            {levelList && levelList.map(level => (
              <TouchableOpacity
                key={level.id}
                onPress={() => handleSelected(level.id)}
              >
                <AppCard center middle shadow colour={activeButton(level.id)} style={styles.goal} >
                  <AppText dark height={20} size={18}>
                    {level.item.name}
                  </AppText>
                </AppCard>
              </TouchableOpacity>
            ))}
          </AppBlock>
        </ScrollView>
      </AppBlock>
      <BottomNavigationButtons title={BUTTON_TITLES.GENERATE_WORKOUT} navigation={navigation} screenName='GeneratedWorkout' backName='MuscleGroup' style={styles.bottomNav} fontStyles={styles.fontStyles} onPressEvent={workoutGenerator}/>
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
  header: {
    paddingVertical: 30
  },
  goals: {
    flexWrap: "wrap",
    paddingHorizontal: sizes.base * 2,
    marginBottom: sizes.base * 3.5
  },
  goal: {
    minWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    maxWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    height: 150,
  },
  bottomNav: {
    minWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    maxWidth: (width - sizes.padding * 2.4 - sizes.base) / 2,
    height: 50
  },
  fontStyles: {
    fontSize: 16
  }
})

export default Levels