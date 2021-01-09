import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, TouchableHighlight } from 'react-native'

import AppBlock from './AppBlock'
import AppText from './AppText'

import Screen from './Screen'

const CountdownTimer = ({ restPeriod, closeTimer }) => {
  const [display, setDisplay] = useState('00:00')
  const [countdown, setCountdown] = useState(null)

  useEffect(() => {
   timer(restPeriod)
  }, [])

  const timer = (seconds) => {
    const now = Date.now()
    const then = now + seconds * 1000

    displayTimeLeft(seconds)

    setCountdown(setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000)

      if(secondsLeft < 0) {
        clearInterval(countdown)
        return
      }

      displayTimeLeft(secondsLeft)
    }, 1000))
  }

  const displayTimeLeft = (seconds) => {
    
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60
    const display = `${minutes}: ${remainderSeconds}`
    setDisplay(display)
    console.log(minutes, remainderSeconds)
  }

  const clearTimer = () => {
    clearInterval(countdown)
    closeTimer()
    setDisplay('00:00')
  }


  return (
    <AppBlock flex={false} style={styles.timerContainer}>
      <AppText center>Rest for</AppText>
      <AppText center>{display}</AppText>
      <TouchableHighlight
        style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
        onPress={clearTimer}
      >
        <Text style={styles.textStyle}>Skip Timer</Text>
      </TouchableHighlight>
    </AppBlock>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    height: 50,
    // borderWidth: 6,
    // borderColor: "#20232a",
    // borderRadius: 6,
  }
})

export default CountdownTimer
