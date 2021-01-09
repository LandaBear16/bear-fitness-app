import React, { useState } from 'react'
import { View, FlatList, StyleSheet, Text, StatusBar, SafeAreaView } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { generateWorkout } from '../redux/action/workout-fitness'

import AppBlock from '../components/AppBlock'
import AppButtonBasic from '../components/AppButtonBasic'
import AppText from '../components/AppText'
import AppModal from '../components/AppModal'
import Screen from '../components/Screen'

import {colours, sizes} from "../config/theme"

const BeginWorkoutScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const { generatedWorkout } = useSelector(state => state.generatedWorkout)
  const { levelDetails } = useSelector(state => state.workoutFitness)
  const dispatch = useDispatch()
  const workoutGenerator = workout => dispatch(generateWorkout())
  const count = 1


  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{levelDetails.reps} x {title}</Text>
    </View>
  )

  const renderItem = ({ item }) => {
    return <Item title={item.name} />
  }

  const openTimer = () => {
    setModalVisible(true)
  }

  const closeTimer = () => {
    setModalVisible(false)
  }

  return (
    <Screen style={styles.container}>
      <AppText h1 center>{levelDetails.sets} Sets of:</AppText>
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
        <AppModal modalVisible={modalVisible} close={closeTimer} />
        <View style={styles.border}>
          <AppButtonBasic title={`Complete Set ${count}`} onPress={openTimer} />
        </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%'
  },
  scrollContainer: {
    flex: 9,
  },
  item: {
    backgroundColor: colours.light,
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 6
  },
  title: {
    fontSize: 20,
  },
  border: {
    borderWidth: 6,
    borderColor: "#20232a",
    borderRadius: 6,
  }
})

export default BeginWorkoutScreen
