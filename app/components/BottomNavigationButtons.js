import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import AppBlock from '../components/AppBlock'
import AppButtonBasic from '../components/AppButtonBasic'

import {colours, sizes, fonts} from "../config/theme"

const BottomNavigationButtons = ({ title, screenName, message, setMessage, style, fontStyles, onPressEvent, displayButton }) => {
  
  const navigation = useNavigation()


const handleOnPress = () => {
  console.log('displ', displayButton)
  if (!displayButton) {
    if (onPressEvent !== null) {
      onPressEvent()
    }
    navigation.navigate(screenName)
  } else {
    setMessage('PLEASE SELECT AN OPTION TO CONTINUE')
  }
}

  return (
    // <AppBlock style={styles.container}>
    //   {backName !== null && <AppButtonBasic title='Back' onPress={() => navigation.navigate(backName) } style={style} fontStyles={fontStyles}/> }
    //   <AppButtonBasic title={title} onPress={handleOnPress} style={style} fontStyles={fontStyles} displayButton={displayButton}/> 
    // </AppBlock>
    <View style={{ flex: 1, flexDirection: 'row', paddingVertical: sizes.padding }}>
    <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: sizes.padding }}>
        <Text style={{ flex: 1, color: colours.primary, ...fonts.h3 }}>{message}</Text>
    </View>
    <TouchableOpacity
        style={{
            flex: 1,
            flexDirection: 'row',
            paddingHorizontal: sizes.padding,
            alignItems: 'center',
            justifyContent: 'center',
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            backgroundColor: displayButton ? colours.secondary : colours.primary
        }}
        onPress={handleOnPress}
    >
        <Text style={{ color: colours.white, ...fonts.h2 }}>{title}</Text>
    </TouchableOpacity>
</View>
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
