import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import AppText from './AppText'
import { colours, sizes, fonts } from "../config/theme"

const AppHeader = ({ }) => {
  return (
    <View style={styles.container} >
      <View style={styles.buttonContainer}>
        <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate("Home") }}
        >
          <MaterialCommunityIcons name="keyboard-backspace" size={24} color={colours.primary} />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate("Home") }}
        >
          <MaterialCommunityIcons name="refresh" size={24} color={colours.primary} />
        </TouchableOpacity>
        <TouchableOpacity
            style={styles.button}
            onPress={() => { navigation.navigate("Home") }}
        >
          <MaterialCommunityIcons name="heart" size={24} color={colours.primary} />
        </TouchableOpacity>
      </View>
      <View>
      <AppText neonBlue height={20} largeTitle center style={styles.header}>Select your Training Goal:</AppText>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10
  },
  header: {
    paddingTop: 40
  },
  button: {
    width: 40, 
    height: 40, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 20, 
    backgroundColor: 'rgba(255,255,255,0.5)'
  }
})

export default AppHeader
