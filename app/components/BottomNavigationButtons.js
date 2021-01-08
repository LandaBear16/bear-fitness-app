import React from 'react'
import { StyleSheet } from 'react-native'

import AppBlock from '../components/AppBlock'
import AppButtonBasic from '../components/AppButtonBasic'

import {colours, sizes} from "../config/theme"

const BottomNavigationButtons = ({ navigation, title, screenName, backName, style }) => {
  return (
    <AppBlock style={styles.container}>
      {backName !== null && <AppButtonBasic title='Back' onPress={() => navigation.navigate(backName) } style={style}/> }
      <AppButtonBasic title={title} onPress={() => navigation.navigate(screenName)} style={style}/>
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
