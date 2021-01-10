import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { LinearGradient } from 'expo-linear-gradient'

import AppText from './AppText'
import {colours} from "../config/theme";

const AppButtonBasic = ({ title, onPress, colour = "primary", textColour = 'white', marginVertical = 10, style, fontStyles, displayButton = false}) => {
  const buttonStyles = [styles.button, style]
  const textStyles = [styles.text, fontStyles]
  return (
    <TouchableOpacity
      style={[{ marginVertical }, buttonStyles] }
      onPress={onPress}
      disabled={displayButton}
    >
      <AppText h1 neonBlue style={[{ color: colours[textColour]}]}>{title}</AppText>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colours.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    borderRadius: 5
  },
  text: {
    color: colours.white,
    fontSize: 18,
  },
});

export default AppButtonBasic;
