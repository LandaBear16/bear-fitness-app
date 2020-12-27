import * as NUMBERS from '../common/constants/numbers'
import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { firebase } from '../firebase/config'

import AppButton from '../components/AppButton' 
import Screen from '../components/Screen'
import colours from '../config/colours'

const TestScreen = () => {

  const testQuery = async () => {
    console.log("testing")
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