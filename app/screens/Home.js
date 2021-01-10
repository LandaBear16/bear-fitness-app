import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import AppButtonBasic from '../components/AppButtonBasic'
import LinearGradientScreen from '../components/LinearGradientScreen'
import Screen from '../components/Screen'

const Home = ({ navigation }) => {
  return (
    <Screen>
      <View>
        <Text style={styles.text}>HOME</Text>
        <AppButtonBasic title='Generate Workout' onPress={() => navigation.navigate('TrainingGoals')} />
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  text: {
    color: 'black'
  },
})

export default Home
