import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colours from "../config/colours";

function AppButtonBasic({ title, onPress, colour = "primary", textColour = 'white', marginVertical = 10, style}) {
  const buttonStyles = [styles.button, style]
  return (
    <TouchableOpacity
      style={[buttonStyles, { backgroundColor: colours[colour], marginVertical }]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colours[textColour]}]}>{title}</Text>
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
  
  text: {
    color: colours.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButtonBasic;
