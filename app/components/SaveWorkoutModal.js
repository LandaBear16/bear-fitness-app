import * as BUTTON_TITLES from '../common/constants/ButtonTitles'
import * as SCREEN_NAMES from '../common/constants/ScreenNames'
import * as MESSAGES from '../common/constants/progressMessage'
import React, { useContext, useState } from 'react'
import { View, Text, Modal, StyleSheet, TouchableOpacity, SafeAreaView, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { deleteWorkout } from '../redux/action/generatedWorkout'
import { UserContext } from '../context/UserContext'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { useNavigation, Link } from '@react-navigation/native'

import AppBlock from '../components/AppBlock'
import AppText from '../components/AppText'
import AppHeader from '../components/AppHeader'
import BottomNavigationButtons from '../components/BottomNavigationButtons'
import LinearGradientScreen from '../components/LinearGradientScreen'
import Screen from '../components/Screen'

import {colours, sizes} from '../config/theme'

const SaveWorkoutModal = ({ modalVisible, toggle }) => {
  // const navigation = useNavigation()
  const [message, setMessage] = useState(MESSAGES.LOVE_HATE)
  const [user, setUser] = useContext(UserContext)
  const { generatedWorkout, savedWorkouts } = useSelector(state => state.generatedWorkout)
  const { levelDetails } = useSelector(state => state.workoutFitness)
  const dispatch = useDispatch()
  const deleteSelectedWorkout = () => dispatch(deleteWorkout())


  const handleDelete = () => {
    deleteSelectedWorkout()
    toggle()
  }

  const Item = ({ title }) => (
    <View style={styles.item}>
      <AppText white style={styles.text}>{levelDetails.reps} x {title}</AppText>
    </View>
  )

  const renderItem = ({ item }) => {
  console.log("🚀 ~ file: SaveWorkoutModal.js ~ line 41 ~ renderItem ~ item", item)

    return <Item title={item.name} />
  }

  const handleMessageChange = (newMessage) => {
    setMessage(newMessage)
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
        {levelDetails &&<AppText neonBlue height={20} largeTitle center style={styles.header}>{`${levelDetails.sets} sets of`}</AppText>}
        </View>
        <AppBlock style={styles.scrollContainer}>
      <SafeAreaView
          style={{ paddingVertical: sizes.base * 2 }}
        >
        { generatedWorkout && <FlatList
          data={generatedWorkout}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
        }
        </SafeAreaView>
        </AppBlock>
        <BottomNavigationButtons 
          displayButton={false} 
          title={BUTTON_TITLES.BEGIN_WORKOUT} 
          screenName={SCREEN_NAMES.BEGIN_WORKOUT} 
          nestedNavigator='Home'
          nestedName='BeginWorkoutScreen'
          message={message}
          setMessage={handleMessageChange}
          style={styles.bottomNav} 
          onPressEvent={null}
        />
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
  scrollContainer: {
    flex: 9,
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
