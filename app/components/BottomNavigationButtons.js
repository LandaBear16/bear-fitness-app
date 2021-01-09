import React from 'react'
import { StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import AppBlock from '../components/AppBlock'
import AppButtonBasic from '../components/AppButtonBasic'

import {colours, sizes} from "../config/theme"

const BottomNavigationButtons = ({ title, screenName, backName, style, fontStyles, onPressEvent, displayButton }) => {
  const navigation = useNavigation()

const handleOnPress = () => {
  if (onPressEvent !== null) {
    onPressEvent()
  }
  navigation.navigate(screenName)
}

  return (
    <AppBlock style={styles.container}>
      {backName !== null && <AppButtonBasic title='Back' onPress={() => navigation.navigate(backName) } style={style} fontStyles={fontStyles}/> }
      <AppButtonBasic title={title} onPress={handleOnPress} style={style} fontStyles={fontStyles} displayButton={displayButton}/> 
    </AppBlock>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    height: '25%',
    paddingHorizontal: sizes.base * 2,
    marginBottom: sizes.base * 3.5,
    backgroundColor: colours.light,
  }
})

export default BottomNavigationButtons
