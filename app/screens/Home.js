import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import Screen from '../components/Screen'

const Home = () => {
  return (
    <Screen>
      <View>
        <Text style={styles.text}>HOME</Text>
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
