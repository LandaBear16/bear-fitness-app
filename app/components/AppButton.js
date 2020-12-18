import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colours from "../config/colours";

function AppButton({ title, onPress, colour = "primary" }) {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: colours[colour] }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
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
    width: "100%",
    marginVertical: 10,
  },
  text: {
    color: colours.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});

export default AppButton;
