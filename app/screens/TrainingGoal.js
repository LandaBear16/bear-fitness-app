import React, { useState } from 'react'
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'

import Screen from '../components/Screen'
import colours from '../config/colours'
import defaultStyles from '../config/defaultStyles'

const TrainingGoal = () => {

  const [selected, setSelected] = useState(null)

  const handleSelected = (flag, button) => {
    setSelected(flag)
  }

  const activeButton = (key) => {
    return selected === key ? styles.activeButton : ''
  }

  console.log('value', selected)

  return (
    <Screen>
      <View style={styles.container}>
        <Text style={{ ...defaultStyles.text }}>Training Goal</Text>
        <TouchableOpacity
          style={[styles.button, activeButton('1')]}
          onPress={() => handleSelected('1')}
          underlayColor="red">
          <Text style={[styles.buttonText]}>Muscle Gains</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeButton('2')]}
          onPress={() => handleSelected('2')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Fat Loss</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeButton('3')]}
          onPress={() => handleSelected('3')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Strength</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, activeButton('4')]}
          onPress={() => handleSelected('4')}
          underlayColor='#fff'>
          <Text style={styles.buttonText}>Conditioning</Text>
        </TouchableOpacity>
      </View>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  button: {
    backgroundColor: colours.white,
    borderTopLeftRadius: 30,
    borderBottomRightRadius: 30,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    marginHorizontal: 40,
    marginVertical: 20,
    paddingVertical: 10,
    borderWidth: 5,
    borderColor: colours.primary
  },
  buttonText:{
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10,
      ...defaultStyles.text,
      color:colours.primary,
      fontWeight: "800"
  },
  activeButton: {
    backgroundColor: colours.plight,
  },
  activeButtonText: {
    color: colours.plight
  }
})

export default TrainingGoal