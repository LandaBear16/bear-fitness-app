import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet } from 'react-native'
import { UserContext } from '../context/UserContext'
import { getSavedWorkouts } from '../redux/action/generatedWorkout'
import { useSelector, useDispatch } from 'react-redux'

import LinearGradientScreen from '../components/LinearGradientScreen'
import SaveWorkoutModal from '../components/SaveWorkoutModal'

import Screen from '../components/Screen'

const SavedWorkoutsScreen = () => {
  const [user, setUser] = useContext(UserContext)
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const savedWorkouts = () => dispatch(getSavedWorkouts(user))

  useEffect(() => {
    savedWorkouts()
  }, [])

  const toggleModal = () => {
    const toggle = !modalVisible
    setModalVisible(toggle)
  }

  return (
    <Screen style={styles.container}>
       <LinearGradientScreen />
       <SaveWorkoutModal modalVisible={modalVisible} toggle={toggleModal}/>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})

export default SavedWorkoutsScreen
