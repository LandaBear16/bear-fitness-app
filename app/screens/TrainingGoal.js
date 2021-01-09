import * as BUTTON_TITLES from '../common/constants/ButtonTitles'
import * as SCREEN_NAMES from '../common/constants/ScreenNames'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { firebase } from '../firebase/config'
import { updateTrainingGoal, updateGoals, setInitialGoals } from '../redux/action/workout-fitness'
import { snapshotToArray } from '../helper/snapshotToArray'

import AppBlock from '../components/AppBlock'
import AppCard from '../components/AppCard'
import AppText from '../components/AppText'
import BottomNavigationButtons from '../components/BottomNavigationButtons'
import { sizes} from "../config/theme"
import Screen from '../components/Screen'


const { width } = Dimensions.get("window")

const TrainingGoal = () => {
  const [displayButton, setDisplayButton] = useState(true)
  const { goals, trainingGoal } = useSelector(state => state.workoutFitness)
  const dispatch = useDispatch()
  const addTrainingGoal = goal => dispatch(updateTrainingGoal(goal))
  const setGoalsArray = goalArr => dispatch(setInitialGoals(goalArr))

  useEffect(() => {
    getGoals()
  }, [])


  const getGoals = async () => {
    const goalsRef = firebase.firestore().collection('training_goal');
    const snapshot = await goalsRef.get();
    const goalsArray = snapshotToArray(snapshot)
    setGoalsArray(goalsArray)
  }


  const handleSelected = (id) => {
    addTrainingGoal(id)
    setDisplayButton(false)
  }


  const activeButton = (key) => {
    return trainingGoal === key ? 'plight' : 'gray'
  }


  return (
    <Screen style={styles.container}>
      <AppText primary height={20} h1 center bold style={styles.header}>Select your Training Goal:</AppText>
      <AppBlock style={styles.scrollContainer}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{ paddingVertical: sizes.base * 2, height: '90%' }}
          >
            <AppBlock flex={false} row space="between" style={styles.goals}>
              {goals && goals.map(goal => (
                <TouchableOpacity
                  key={goal.id}
                  onPress={() => handleSelected(goal.id)}
                >
                  <AppCard center middle shadow colour={activeButton(goal.id)} style={styles.goal} >
                    <AppText dark height={20} size={18}>
                      {goal.item.name}
                    </AppText>
                  </AppCard>
                </TouchableOpacity>
              ))}
            </AppBlock>
          </ScrollView>
        </AppBlock>
        <BottomNavigationButtons 
          displayButton={displayButton} 
          title={BUTTON_TITLES.NEXT} 
          screenName='EquipmentList' 
          backName='Home' 
          style={styles.bottomNav} 
          onPressEvent={null}
        />
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
  }
})

export default TrainingGoal


 