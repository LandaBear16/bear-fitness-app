import React from 'react'
import { View, Text } from 'react-native'
import AppButtonBasic from './AppButtonBasic'

import Screen from './Screen'

const CountdownTimer = () => {
  let countdown

  const timer = (seconds) => {
    const now = Date.now()
    const then = now + seconds * 1000

    displayTimeLeft(seconds)

    countdown = setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000)

      if(secondsLeft < 0) {
        clearInterval(countdown)
        return
      }

      displayTimeLeft(secondsLeft)
    }, 1000)
  }

  const displayTimeLeft = (seconds) => {
    console.log('TIME: ', seconds)
  }

  const clearTimer = () => {
    clearInterval(countdown)
  }


  return (
    <Screen>
      <View>
      <Text>Timer</Text>
      <AppButtonBasic title='Start' onPress={() => timer(10)} />
      <AppButtonBasic title='Stop' onPress={clearTimer} />
    </View>
    </Screen>
  )
}

export default CountdownTimer
