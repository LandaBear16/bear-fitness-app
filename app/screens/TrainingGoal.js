import * as NUMBERS from '../common/constants/numbers'
import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { firebase } from '../firebase/config'
import { updateTrainingGoal, updateGoals } from '../redux/action/workout-fitness'

import AppButton from '../components/AppButton' 
import AppBlock from '../components/AppBlock'
import AppCard from '../components/AppCard'
import Screen from '../components/Screen'
import colours from '../config/colours'
import defaultStyles from '../config/defaultStyles'

const TrainingGoal = () => {
  const [selected, setSelected] = useState(null)
  const [goals, setGoals] = useState(null)
  const workoutFitness = useSelector(state => state.workoutFitness)
  const dispatch = useDispatch()
  const addTrainingGoal = goal => dispatch(updateTrainingGoal(goal))
  const setGoalsArray = goalArr => dispatch(updateGoals(goalArr))

  useEffect(() => {
    getGoals()
  }, [])

  const snapshotToArray = (snapshot) => {
    let returnArr = [];
  
    snapshot.forEach((childSnapshot) => {
      let item = childSnapshot.data();
  
      returnArr.push({id: childSnapshot.id, item});
    });
  
    return returnArr;
  };

  const getGoals = async () => {
    const goalsRef = firebase.firestore().collection('training_goal');
    const snapshot = await goalsRef.get();
    const goalsArray = snapshotToArray(snapshot)
    // setGoalsArray(goalsArray)
    setGoals(goalsArray)
  }

  goalDisplay = () => {
    return goals.map((goal) => {
      return <AppCard key={goal.id} title={goal.item.name} onPress={() => handleSelected(goal.id)} colour={activeButton(goal.id)} textColour={activeText(goal.id)} marginVertical={30}/>
    })
  }

  const handleSelected = (id) => {
    console.log('flag', id)
    setSelected(id)
    addTrainingGoal(id)
  }

  const activeButton = (key) => {
    return selected === key ? 'green' : 'primary'
  }

  const activeText = (key) => {
    return selected === key ? 'plight' : 'plight'
  }


  return (
    <Screen>
      <View style={styles.container}>
        <Text>NBOOM</Text>
        <AppBlock>
          <AppCard>
            <Text>Hello</Text>
          </AppCard>
        </AppBlock>
      
        {/* <AppButton title='Muscle Gains' onPress={() => handleSelected(NUMBERS.ONE)} colour={activeButton(NUMBERS.ONE)} textColour={activeText(NUMBERS.ONE)} marginVertical={30}/>

        <AppButton title='Fat Loss' onPress={() => handleSelected(NUMBERS.TWO)} colour={activeButton(NUMBERS.TWO)} textColour={activeText(NUMBERS.TWO)} marginVertical={30}/>

        <AppButton title='Strength' onPress={() => handleSelected(NUMBERS.THREE)} colour={activeButton(NUMBERS.THREE)} textColour={activeText(NUMBERS.THREE)} marginVertical={30}/>

        <AppButton title='Conditioning' onPress={() => handleSelected(NUMBERS.FOUR)} colour={activeButton(NUMBERS.FOUR)} textColour={activeText(NUMBERS.FOUR)} marginVertical={30}/> */}
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20,
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between'
  },
  activeButton: {
    backgroundColor: colours.plight,
  },
  activeButtonText: {
    color: colours.plight
  }
})

export default TrainingGoal