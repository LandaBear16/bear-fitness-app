import * as SCREEN_NAMES from '../common/constants/ScreenNames'
import React, { useContext } from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { UserContext } from '../context/UserContext'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import AppText from '../components/AppText'
import AppHeader from '../components/AppHeader'
import LinearGradientScreen from '../components/LinearGradientScreen'
import Screen from '../components/Screen'

import {colours} from '../config/theme'

const SaveWorkoutModal = ({ modalVisible, toggle, navigation }) => {
  const [user, setUser] = useContext(UserContext)
  
  return (
      <Modal
        animationType="slide"
        visible={modalVisible}
        presentationStyle='fullScreen'
      >
      <LinearGradientScreen />
        <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => { navigation.navigate('Saved Workouts') }}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color={colours.primary} />
        </TouchableOpacity>

        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
});

export default SaveWorkoutModal
