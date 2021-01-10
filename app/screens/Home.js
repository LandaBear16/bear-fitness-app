import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { resetWorkoutOptions } from '../redux/action/workout-fitness'
import { useDispatch } from 'react-redux'

import AppButtonBasic from '../components/AppButtonBasic'
import AppText from '../components/AppText'
import LinearGradientScreen from '../components/LinearGradientScreen'
import Screen from '../components/Screen'
import { colours, fonts } from '../config/theme'
import moment from 'moment'

import {circleDiameter} from '../helper/circleDiameter'
import { greetingMessage } from '../helper/greetingMessage'

const { width, height } = Dimensions.get('window')


const diameter = circleDiameter(width, height)
const message = greetingMessage(moment())


const Home = ({ navigation }) => {
  const dispatch = useDispatch()
  const resetTrainingOptions = () => dispatch(resetWorkoutOptions())

  return (
    <Screen style={styles.screen}>
      <LinearGradientScreen />
      <AppText largeTitle neonBlue center style={styles.message} >{message}</AppText>
      <View style={styles.buttonContainer}>
        <AppButtonBasic title='Generate Workout' onPress={() => navigation.navigate('TrainingGoals')} style={styles.round} fontStyles={styles.text} />
      </View>
    </Screen>
  )
}


const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    marginTop: 20,
  },
  text: {
    color: colours.neonBlue,
    ...fonts.largeTitle
  },
  round: {
    borderWidth:15,
    borderColor: colours.neonBlue,
    alignItems:'center',
    justifyContent:'center',
    width: diameter.width,
    height: diameter.height,
    borderRadius:(diameter.width / 2),
    backgroundColor: 'rgba(255,101,80,0)'
  }
})

export default Home
