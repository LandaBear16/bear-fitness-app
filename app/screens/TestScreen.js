import * as NUMBERS from '../common/constants/numbers'
import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { firebase } from '../firebase/config'
import { useSelector, useDispatch } from "react-redux"
import { updateTest } from '../redux/action/workout-fitness'

import AppButtonBasic from '../components/AppButtonBasic' 
import Screen from '../components/Screen'
import colours from '../config/colours'

const TestScreen = (props) => {

  const theme = useSelector((state) => state.workoutFitness);

  const dispatch = useDispatch();

  const testQuery = async () => {

    dispatch(updateTest())
    const query = await firebase.firestore().collection("training_goal").doc("XQpxlu4dMb6RQ8sqDGQV").get()


    const details = query.data().workout_details

    const [level] = details.filter((item) => {
      return item.level === 'Intermediate'
    })


  }

  return (
    <Screen>
      <View style={styles.container}>
        <AppButtonBasic title='Test Query' onPress={testQuery}/>
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