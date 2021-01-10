import React from 'react'
import { StyleSheet } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { colours } from '../config/theme'

const LinearGradientScreen = () => {
console.log("🚀 ~ file: LinearGradientScreen.js ~ line 6 ~ LinearGradientScreen ~ styles", styles)
  return (
    <LinearGradient
        // Background Linear Gradient
        colors={['#0f3057', '#00587a', '#008891', '#e7e7de']}
        start={[1, 0]}
        end={[0, 1]}
        locations={[0.0, 0.33, 0.67, 1.0]}
        style={styles.background}
      />
  )
}

const styles = StyleSheet.create({
  background: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: '100%',
  },
})

export default LinearGradientScreen
