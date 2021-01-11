import React, { useState, useContext, useEffect } from 'react'
import { StyleSheet, SafeAreaView, FlatList, TouchableOpacity } from 'react-native'
import { UserContext } from '../context/UserContext'
import { getSavedWorkouts, selectedWorkout } from '../redux/action/generatedWorkout'
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
  const setSelectedWorkout = (id) => dispatch(selectedWorkout(id))

  useEffect(() => {
    savedWorkouts()
  }, [])

  const toggleModal = (id) => {
  if (!modalVisible) {
    setSelectedWorkout(id)
  } else {
    setSelectedWorkout('')
  }
   
    const toggle = !modalVisible
    setModalVisible(toggle)
  }

  const Item = ({item}) => {
    return <TouchableOpacity style={styles.item} onPress={() => toggleModal(item.id)}>
    <AppText white style={styles.text}>{item.item.name}</AppText>
  </TouchableOpacity>
  }

  const renderItem = ({ item }) => {
  
    return <Item item={item} />
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
          keyExtractor={item => item.id}
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
