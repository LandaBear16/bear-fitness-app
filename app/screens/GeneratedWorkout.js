import * as BUTTON_TITLES from '../common/constants/ButtonTitles'
import * as SCREEN_NAMES from '../common/constants/ScreenNames'
import * as MESSAGES from '../common/constants/progressMessage'
import * as TITLE from '../common/constants/titleScreenNames'
import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'

import AppBlock from '../components/AppBlock'
import AppText from '../components/AppText'
import BottomNavigationButtons from '../components/BottomNavigationButtons'
import AppHeader from '../components/AppHeader'
import LinearGradientScreen from '../components/LinearGradientScreen'
import Screen from '../components/Screen'


import {colours, sizes} from "../config/theme"

const GeneratedWorkout = () => {
  const [message, setMessage] = useState(MESSAGES.TRAINING_GOAL_MESSAGE)
  const { generatedWorkout } = useSelector(state => state.generatedWorkout)
  const { levelDetails } = useSelector(state => state.workoutFitness)


  const Item = ({ title }) => (
    <View style={styles.item}>
      <AppText white style={styles.text}>{levelDetails.reps} x {title}</AppText>
    </View>
  )

  const renderItem = ({ item }) => {
    return <Item title={item.name} />
  }

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage)
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
        <BottomNavigationButtons 
          displayButton={false} 
          title={BUTTON_TITLES.BEGIN_WORKOUT} 
          screenName={SCREEN_NAMES.BEGIN_WORKOUT} 
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

export default GeneratedWorkout
