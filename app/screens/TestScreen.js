import * as NUMBERS from '../common/constants/numbers'
import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { firebase } from '../firebase/config'
import { useSelector, useDispatch } from "react-redux"
import { updateTest } from '../redux/action/workout-fitness'

import AppButton from '../components/AppButton' 
import Screen from '../components/Screen'
import colours from '../config/colours'

const TestScreen = (props) => {

  const theme = useSelector((state) => state.workoutFitness);
  console.log("🚀 ~ file: TestScreen.js ~ line 16 ~ TestScreen ~ theme", theme)
  const dispatch = useDispatch();

  const testQuery = async () => {
    console.log("testing")
    dispatch(updateTest())
    const query = await firebase.firestore().collection("training_goal").doc("XQpxlu4dMb6RQ8sqDGQV").get()

    console.log('data', query.data().workout_details)
    const details = query.data().workout_details

    const [level] = details.filter((item) => {
      return item.level === 'Intermediate'
    })

    console.log('level', level)
  }

  return (
    <Screen>
      <View style={styles.container}>
        <AppButton title='Test Query' onPress={testQuery}/>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20
  },
})

export default TestScreen