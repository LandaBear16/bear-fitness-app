import * as BUTTON_TITLES from '../common/constants/ButtonTitles'
import * as SCREEN_NAMES from '../common/constants/ScreenNames'
import * as MESSAGES from '../common/constants/progressMessage'
import * as TITLE from '../common/constants/titleScreenNames'
import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { resetWorkoutOptions } from '../redux/action/workout-fitness'


import AppBlock from '../components/AppBlock'
import AppButtonBasic from '../components/AppButtonBasic'
import AppText from '../components/AppText'
import AppModal from '../components/AppModal'
import BottomNavigationButtons from '../components/BottomNavigationButtons'
import AppHeader from '../components/AppHeader'
import LinearGradientScreen from '../components/LinearGradientScreen'
import Screen from '../components/Screen'


import {colours, sizes} from "../config/theme"



const BeginWorkoutScreen = ({ navigation }) => {
  const [message, setMessage] = useState(MESSAGES.TRAINING_GOAL_MESSAGE)
  const [modalVisible, setModalVisible] = useState(false)
  const [setCount, increaseSetCount] = useState(1)
  const [buttonName, setButtonName] = useState(`${BUTTON_TITLES.COMPLETE_SET} ${setCount}`)
  const { generatedWorkout } = useSelector(state => state.generatedWorkout)
  const { levelDetails } = useSelector(state => state.workoutFitness)
  const dispatch = useDispatch()
  const reset = () => dispatch(resetWorkoutOptions())
 




  const Item = ({ title, navgation }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{levelDetails.reps} x {title}</Text>
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
    console.log('setCount', setCount)
    const set = setCount + 1
    increaseSetCount(set)
    if (set <= levelDetails.sets) {
      console.log('set', setCount)
      setButtonName(`${BUTTON_TITLES.COMPLETE_SET} ${set}`)
    } 
  }

  const handleCompleteWorkout = () => {
    reset()
    navigation.navigate('Home')
  }

  return (
    <Screen style={styles.container}>
    <LinearGradientScreen />
      <AppText h1 center>{levelDetails.sets} Sets of:</AppText>
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
        <AppModal modalVisible={modalVisible} close={closeTimer} restPeriod={levelDetails.rest_per_set}/>
        <View style={styles.border}>
        {console.log('count', setCount < levelDetails.sets)}
        {setCount <= levelDetails.sets
        ? <AppButtonBasic title={buttonName} onPress={openTimer}  />
        : <AppButtonBasic title={BUTTON_TITLES.COMPLETE_WORKOUT} onPress={handleCompleteWorkout}  />
        }
          
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

export default BeginWorkoutScreen
