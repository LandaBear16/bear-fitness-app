import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'

import AppButtonBasic from '../components/AppButtonBasic'
import LinearGradientScreen from '../components/LinearGradientScreen'
import Screen from '../components/Screen'
import { colours } from '../config/theme'

import {circleDiameter} from '../helper/circleDiameter'

const { width, height } = Dimensions.get('window')


const diameter = circleDiameter(width, height)


const Home = ({ navigation }) => {
  return (
    <Screen style={styles.screen}>
      <LinearGradientScreen />
      <View>
        <Text style={styles.text}>HOME</Text>
        <AppButtonBasic title='Generate Workout' onPress={() => navigation.navigate('TrainingGoals')} style={styles.round} fontStyles={styles.text} />
      </View>
    </Screen>
  )
}


const styles = StyleSheet.create({
  screen: {
    width: "100%",
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: colours.neonBlue
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
