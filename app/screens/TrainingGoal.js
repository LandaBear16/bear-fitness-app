import * as NUMBERS from '../common/constants/numbers'
import React, { useState, useEffect } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import { firebase } from '../firebase/config'

import AppButton from '../components/AppButton' 
import Screen from '../components/Screen'
import colours from '../config/colours'
import defaultStyles from '../config/defaultStyles'

const TrainingGoal = () => {
  const [selected, setSelected] = useState(null)
  const [goals, setGoals] = useState(null)

  useEffect(() => {
    const goals = getGoals()
    
  }, [])

  const snapshotToArray = (snapshot) => {
    let returnArr = [];
  
    snapshot.forEach((childSnapshot) => {
      let item = childSnapshot.data();
  
      returnArr.push(item);
    });
  
    return returnArr;
  };

  const getGoals = async () => {
    
    console.log('here', )
    const goalsRef = firebase.firestore().collection('training_goal');
    
    const snapshot = await goalsRef.get();
    const goalsArray = snapshotToArray(snapshot)
    setGoals(goalsArray)

    // const buttons = []
    // snapshot.forEach(doc => {
    //   console.log(doc.id, '=>', doc.data().name)
    //   buttons.push(doc.data())
    // })

    // console.log('buttons', buttons)
    // setGoals([...buttons])
    // const goals = await firebase.firestore().collection("training_goal").get()
    // goals.map((goal) => {
    //   console.log('goal', goal.doc().data())
    // })
    // console.log('goal', goals)
    // return goals !== null && goals.map((goal) => (<AppButton title={goal.name} onPress={() => handleSelected(NUMBERS.ONE)} colour={activeButton(NUMBERS.ONE)} textColour={activeText(NUMBERS.ONE)} marginVertical={30}/>))
  }

  goalDisplay = () => {
    return goals.map((goal) => {
      console.log('gaol', goal.id)
      return <AppButton title={goal.name} onPress={() => handleSelected(NUMBERS.ONE)} colour={activeButton(NUMBERS.ONE)} textColour={activeText(NUMBERS.ONE)} marginVertical={30}/>
    })
  }

  const handleSelected = (flag, button) => {
    console.log('flag', flag)
    setSelected(flag)
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
      {goals && goalDisplay()}
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
    paddingHorizontal: 20
  },
  activeButton: {
    backgroundColor: colours.plight,
  },
  activeButtonText: {
    color: colours.plight
  }
})

export default TrainingGoal