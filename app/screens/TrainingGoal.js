import * as NUMBERS from '../common/constants/numbers'
import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

import AppButton from '../components/AppButton' 
import Screen from '../components/Screen'
import colours from '../config/colours'
import defaultStyles from '../config/defaultStyles'

const TrainingGoal = () => {

  const [selected, setSelected] = useState(null)

  const handleSelected = (flag, button) => {
    console.log('flag', flag)
    setSelected(flag)
  }

  const activeButton = (key) => {
    console.log('colour ', selected === key ? 'plight' : 'primary')
    return selected === key ? 'plight' : 'primary'
  }

  const activeText = (key) => {
    return selected === key ? 'primary' : 'plight'
  }

  console.log('value', selected)

  return (
    <Screen>
      <View style={styles.container}>
        <AppButton title='Muscle Gains' onPress={() => handleSelected(NUMBERS.ONE)} colour={activeButton(NUMBERS.ONE)} textColour={activeText(NUMBERS.ONE)} marginVertical={30}/>

        <AppButton title='Fat Loss' onPress={handleSelected} onPress={() => handleSelected(NUMBERS.TWO)} colour={activeButton(NUMBERS.TWO)} textColour={activeText(NUMBERS.TWO)} marginVertical={30}/>

        <AppButton title='Strength' onPress={handleSelected} onPress={() => handleSelected(NUMBERS.THREE)} colour={activeButton(NUMBERS.THREE)} textColour={activeText(NUMBERS.THREE)} marginVertical={30}/>

        <AppButton title='Conditioning' onPress={handleSelected} onPress={() => handleSelected(NUMBERS.FOUR)} colour={activeButton(NUMBERS.FOUR)} textColour={activeText(NUMBERS.FOUR)} marginVertical={30}/>
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