import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import {colours, sizes} from "../config/theme";

const AppBlock = ({ children, title, onPress, colour = "primary", textColour = 'white', marginVertical = 10 }) => {
  return (
    <View>
      {children}
    </View>
  );
}

export const styles = StyleSheet.create({
  block: {
    flex: 1
  },
  row: {
    flexDirection: "row"
  },
  column: {
    flexDirection: "column"
  },
  card: {
    borderRadius: sizes.radius
  },
  center: {
    alignItems: "center"
  },
  middle: {
    justifyContent: "center"
  },
  left: {
    justifyContent: "flex-start"
  },
  right: {
    justifyContent: "flex-end"
  },
  top: {
    justifyContent: "flex-start"
  },
  bottom: {
    justifyContent: "flex-end"
  },
  shadow: {
    shadowColor: colours.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 13,
    elevation: 2
  },
  accent: { backgroundColor: colours.accent },
  primary: { backgroundColor: colours.primary },
  secondary: { backgroundColor: colours.secondary },
  tertiary: { backgroundColor: colours.tertiary },
  black: { backgroundColor: colours.black },
  white: { backgroundColor: colours.white },
  gray: { backgroundColor: colours.gray },
  gray2: { backgroundColor: colours.gray2 }
});

export default AppBlock;
