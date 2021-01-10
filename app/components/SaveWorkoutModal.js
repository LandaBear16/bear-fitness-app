import * as SCREEN_NAMES from '../common/constants/ScreenNames'
import React, { useContext } from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { deleteWorkout } from '../redux/action/generatedWorkout'
import { UserContext } from '../context/UserContext'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'

import AppText from '../components/AppText'
import AppHeader from '../components/AppHeader'
import LinearGradientScreen from '../components/LinearGradientScreen'
import Screen from '../components/Screen'

import {colours} from '../config/theme'

const SaveWorkoutModal = ({ modalVisible, toggle }) => {
  const [user, setUser] = useContext(UserContext)
  const dispatch = useDispatch()
  const deleteSelectedWorkout = () => dispatch(deleteWorkout())

  const handleDelete = () => {
    deleteSelectedWorkout()
    toggle()
  }
  
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
          onPress={toggle}
        >
          <MaterialIcons name="keyboard-arrow-left" size={24} color={colours.primary} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={handleDelete}
        >
          <MaterialIcons name="delete" size={24} color={colours.primary} />
        </TouchableOpacity>
        </View>
        <View>
          <AppText neonBlue height={20} largeTitle center style={styles.header}>sets</AppText>
        </View>
      </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  centeredView: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50
  },
  header: {
    paddingTop: 20
  },
  button: {
    width: 40, 
    height: 40, 
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRadius: 20, 
    backgroundColor: 'rgba(255,255,255,0.5)'
  }
});

export default SaveWorkoutModal
