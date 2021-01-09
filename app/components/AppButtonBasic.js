import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colours from "../config/colours";

function AppButtonBasic({ title, onPress, colour = "primary", textColour = 'white', marginVertical = 10, style, fontStyles, displayButton = false}) {
  const buttonStyles = [styles.button, style]
  const textStyles = [styles.text, fontStyles]
  return (
    <TouchableOpacity
      style={[buttonStyles, { backgroundColor: displayButton ? colours.light : colours[colour], marginVertical }]}
      onPress={onPress}
      disabled={displayButton}
    >
      <Text style={[textStyles, { color: colours[textColour]}]}>{title}</Text>
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
    fontWeight: "bold",
  },
});

export default AppButtonBasic;
