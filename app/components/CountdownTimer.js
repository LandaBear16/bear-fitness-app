import React, {useState, useEffect} from 'react'
import { StyleSheet, TouchableHighlight } from 'react-native'
import { colours } from '../config/theme'

import AppBlock from './AppBlock'
import AppText from './AppText'

const CountdownTimer = ({ restPeriod, closeTimer }) => {
  const [display, setDisplay] = useState('00:00')
  const [title, setTitle] = useState('Skip Rest Period')
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
        setTitle('Close Modal')
        clearInterval(countdown)
        return
      }

      displayTimeLeft(secondsLeft)
    }, 1000))
  }

  const displayTimeLeft = (seconds) => {
    
    const minutes = Math.floor(seconds / 60)
    const remainderSeconds = seconds % 60
    const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`
    setDisplay(display)
  }

  const clearTimer = () => {
    clearInterval(countdown)
    closeTimer()
    setDisplay('00:00')
  }


  return (
    <AppBlock flex={false} style={styles.timerContainer}>
      <AppText primary h1 center>Rest for</AppText>
      <AppText primary h1 center>{display}</AppText>
      <TouchableHighlight
        style={{ ...styles.openButton }}
        onPress={clearTimer}
      >
        <AppText white bold center style={styles.textStyle}>{title}</AppText>
      </TouchableHighlight>
    </AppBlock>
  )
}

const styles = StyleSheet.create({
  timerContainer: {
    height: 100,
    width: 100
  },
  openButton: {
    backgroundColor: colours.primary,
    borderRadius: 20,
    padding: 10,
    marginTop: 10,
    elevation: 2
  },
})

export default CountdownTimer
