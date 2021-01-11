import * as BUTTON_TITLES from '../common/constants/ButtonTitles'
import * as SCREEN_NAMES from '../common/constants/ScreenNames'
import * as MESSAGES from '../common/constants/progressMessage'
import * as TITLE from '../common/constants/titleScreenNames'
import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { resetWorkoutOptions } from '../redux/action/workout-fitness'

import AppBlock from '../components/AppBlock'
import AppModal from '../components/AppModal'
import AppText from '../components/AppText'
import BottomNavigationButtons from '../components/BottomNavigationButtons'
import AppHeader from '../components/AppHeader'
import LinearGradientScreen from '../components/LinearGradientScreen'
import Screen from '../components/Screen'


import {colours, sizes} from "../config/theme"

const BeginWorkoutScreen = ({ navigation }) => {
  const [message, setMessage] = useState(MESSAGES.TRAINING_GOAL_MESSAGE)
  const [modalVisible, setModalVisible] = useState(false)
  const [setCount, increaseSetCount] = useState(1)
  const [displayButton, setDisplayButton] = useState(true)
  const [buttonName, setButtonName] = useState(`${BUTTON_TITLES.COMPLETE_SET} ${setCount}`)
  const { generatedWorkout } = useSelector(state => state.generatedWorkout)
  const { levelDetails } = useSelector(state => state.workoutFitness)
  const dispatch = useDispatch()
  const reset = () => dispatch(resetWorkoutOptions())


  const Item = ({ title }) => (
    <View style={styles.item}>
      <AppText white style={styles.text}>{levelDetails.reps} x {title}</AppText>
    </View>
  )

  const renderItem = ({ item }) => {
    return <Item title={item.name} />
  }

  const openTimer = () => {
    setModalVisible(true)
    checkSetCounter()
  }

  const closeTimer = () => {
    setModalVisible(false)
  }

  const checkSetCounter = () => {
    const set = setCount + 1
    increaseSetCount(set)
    if (set <= levelDetails.sets) {
      setButtonName(`${BUTTON_TITLES.COMPLETE_SET} ${set}`)
    } 
  }

  const handleCompleteWorkout = () => {
    reset()
    navigation.navigate('Home')
  }

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage)
  }

  return (
    <Screen style={styles.container}>
     <AppModal modalVisible={modalVisible} close={closeTimer} restPeriod={levelDetails.rest_per_set}/>
    <LinearGradientScreen />
      {levelDetails && <AppHeader screenName={SCREEN_NAMES.LEVELS} refresh={false} backButton={false} save={false} title={`${levelDetails.sets} sets of`} />}
      <AppBlock style={styles.scrollContainer}>
      <SafeAreaView
          style={[{ paddingVertical: sizes.base * 2 }]}
        >
        { generatedWorkout && <FlatList
          data={generatedWorkout}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
        }
        </SafeAreaView>
        
        </AppBlock>
       
        {setCount <= levelDetails.sets
        ? <BottomNavigationButtons 
          displayButton={false} 
          title={buttonName} 
          screenName='Home' 
          stopNavigation={true}
          message={message}
          setMessage={handleMessageChange}
          style={styles.bottomNav} 
          onPressEvent={openTimer}
        />
        : <BottomNavigationButtons 
          displayButton={false} 
          title={BUTTON_TITLES.COMPLETE_WORKOUT} 
          screenName='Home' 
          message={message}
          setMessage={handleMessageChange}
          style={styles.bottomNav} 
          onPressEvent={handleCompleteWorkout}
        />
        }
       
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  scrollContainer: {
    flex: 9,
  },
  item: {
    backgroundColor: colours.light,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: colours.primary,
    backgroundColor: colours.primary,
    padding: 10,
    borderRadius: 30
  },
  text: {
    fontSize: 20,
    backgroundColor: colours.primary,
    padding: 5
  },
  border: {
    borderWidth: 6,
    borderColor: "#20232a",
    borderRadius: 6,
  }
})

export default BeginWorkoutScreen
