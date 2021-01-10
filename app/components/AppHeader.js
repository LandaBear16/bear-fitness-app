import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons'
import { useNavigation } from '@react-navigation/native'

import AppText from './AppText'
import { colours, sizes, fonts } from "../config/theme"

const AppHeader = ({ screenName, backButton, refresh, save, title }) => {

  const navigation = useNavigation()

  const renderBackButton = () => {
    if (backButton) {
      return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => { navigation.navigate(screenName) }}
      >
        <MaterialIcons name="keyboard-arrow-left" size={24} color={colours.primary} />
      </TouchableOpacity>)
    }
  }

  const renderRefreshButton = () => {
    if (refresh) {
      return (
      <TouchableOpacity
        style={styles.button}
        // onPress={() => { navigation.navigate("Home") }}
      >
        <MaterialCommunityIcons name="refresh" size={24} color={colours.primary} />
      </TouchableOpacity>)
    }
  }

  const renderSaveButton = () => {
    if (save) {
    return (
      <TouchableOpacity
        style={styles.button}
        // onPress={() => { navigation.navigate("Home") }}
      >
        <MaterialCommunityIcons name="heart" size={24} color={colours.primary} />
      </TouchableOpacity>
    )
    }
  }


  return (
    <View style={styles.container} >
      <View style={styles.buttonContainer}>
        {renderBackButton()}
        {renderRefreshButton()}
        {renderSaveButton()}
      </View>
      <View>
      <AppText neonBlue height={20} largeTitle center style={styles.header}>{title}</AppText>
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
