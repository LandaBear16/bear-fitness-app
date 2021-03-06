import * as BUTTON_TITLES from '../common/constants/ButtonTitles'
import * as SCREEN_NAMES from '../common/constants/ScreenNames'
import * as MESSAGES from '../common/constants/progressMessage'
import * as TITLE from '../common/constants/titleScreenNames'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import { firebase } from '../firebase/config'
import { selectedMuscleGroup, setMuscleGroupList } from '../redux/action/workout-fitness'
import { snapshotToArray } from '../helper/snapshotToArray'

import AppBlock from '../components/AppBlock'
import AppCard from '../components/AppCard'
import AppText from '../components/AppText'
import BottomNavigationButtons from '../components/BottomNavigationButtons'
import AppHeader from '../components/AppHeader'
import LinearGradientScreen from '../components/LinearGradientScreen'
import { colours, sizes} from "../config/theme";
import Screen from '../components/Screen'

const { width } = Dimensions.get("window")

const MuscleGroup = () => {
  const [message, setMessage] = useState(MESSAGES.TRAINING_GOAL_MESSAGE)
  const [displayButton, setDisplayButton] = useState(true)
  const { muscleGroupList, selectedMuscleGroup: muscleGroup } = useSelector(state => state.workoutFitness)
  const dispatch = useDispatch()
  const addMuscleGroup = group => dispatch(selectedMuscleGroup(group))
  const setMuscleGroupArray = muscleArr => dispatch(setMuscleGroupList(muscleArr))

  useEffect(() => {
    getMuscleGroups()
  }, [])

  const getMuscleGroups = async () => {
    const musclesRef = firebase.firestore().collection('muscle_group');
    const snapshot = await musclesRef.get();
    const musclesArray = snapshotToArray(snapshot)
    setMuscleGroupArray(musclesArray)
  }


  const handleSelected = (id) => {
    addMuscleGroup(id)
    setDisplayButton(false)
  }

  const activeButton = (key) => {
    return muscleGroup === key ? 'primary' : 'gray'
  }

  const activeText = (key) => {
    return muscleGroup === key ? colours.white : colours.primary
  }

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage)
  }
  return (
    <Screen style={styles.container}>
     <LinearGradientScreen />
     <AppHeader screenName={SCREEN_NAMES.EQUIPMENT_LIST} refresh={false} backButton={true} save={false} title={TITLE.MUSCLE_GROUP_TITLE}/>
    <AppBlock style={styles.scrollContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ paddingVertical: sizes.base * 2 }}
        >
          <AppBlock flex={false} row space="between" style={styles.goals}>
            {muscleGroupList && muscleGroupList.map(group => (
              <TouchableOpacity
                key={group.id}
                onPress={() => handleSelected(group.id)}
              >
                <AppCard center middle shadow colour={activeButton(group.id)} style={styles.goal} >
                  <AppText dark height={20} size={18} style={{ color: activeText(group.id)}}>
                    {group.item.name}
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
        screenName='Levels' 
        message={message}
        setMessage={handleMessageChange} 
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
    height: 50,
  }
})

export default MuscleGroup