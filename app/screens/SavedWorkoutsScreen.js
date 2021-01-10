import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, SafeAreaView, FlatList, View, TouchableOpacity } from 'react-native'
import { UserContext } from '../context/UserContext'
import { getSavedWorkouts } from '../redux/action/generatedWorkout'
import { useSelector, useDispatch } from 'react-redux'

import AppText from '../components/AppText'
import LinearGradientScreen from '../components/LinearGradientScreen'
import SaveWorkoutModal from '../components/SaveWorkoutModal'

import { colours, sizes } from '../config/theme'

import Screen from '../components/Screen'

const SavedWorkoutsScreen = () => {
  const [user, setUser] = useContext(UserContext)
  const dispatch = useDispatch()
  const [modalVisible, setModalVisible] = useState(false)
  const { savedWorkouts: saved } = useSelector(state => state.generatedWorkout)
  const savedWorkouts = () => dispatch(getSavedWorkouts(user))

  useEffect(() => {
    savedWorkouts()
  }, [])

  const toggleModal = () => {
    const toggle = !modalVisible
    setModalVisible(toggle)
  }

  const Item = ({ title }) => (
    <TouchableOpacity style={styles.item} onPress={toggleModal}>
      <AppText white style={styles.text}>{title}</AppText>
    </TouchableOpacity>
  )

  const renderItem = ({ item }) => {
    return <Item title={item.item.name} />
  }

  return (
    <Screen style={styles.container}>
       <LinearGradientScreen />
       <SaveWorkoutModal modalVisible={modalVisible} toggle={toggleModal} />
       <SafeAreaView
          style={{ paddingVertical: sizes.base * 2 }}
        >
        { saved && <FlatList
          data={saved}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
        }
        </SafeAreaView>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    backgroundColor: colours.light,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 2,
    borderColor: colours.primary,
    backgroundColor: colours.primary,
    padding: 10,
    borderRadius: 30
  },
  text: {
    fontSize: 20,
    backgroundColor: colours.primary,
    padding: 5
  },
})

export default SavedWorkoutsScreen
