import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import {colours, sizes, fonts} from "../config/theme"

const BottomNavigationButtons = ({ title, screenName, message, setMessage, style, fontStyles, onPressEvent, displayButton, stopNavigation = false, nestedNavigator }) => {
  
  const navigation = useNavigation()


const handleOnPress = () => {
  if (stopNavigation) {
    onPressEvent()
  } else if (!displayButton) {
    if (onPressEvent !== null) {
      onPressEvent()
    }

    navigation.navigate(screenName)
    if (nestedNavigator) {
      nestedNavigator()
    }
    // nestedNavigator ? navigation.navigate(nestedNavigator, { screen: nestedName }) : navigation.navigate(screenName)
  } else {
    setMessage('PLEASE SELECT AN OPTION TO CONTINUE')
  }
}

  return (
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

export default BottomNavigationButtons
