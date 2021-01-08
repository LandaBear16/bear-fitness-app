import React, { Component } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import {colours, sizes} from "../config/theme";

class AppButton extends Component {
  render() {
    const {
      style,
      opacity,
      gradient,
      colour,
      startColour,
      endColour,
      end,
      start,
      locations,
      shadow,
      children,
      ...props
    } = this.props;

    const buttonStyles = [
      styles.button,
      shadow && styles.shadow,
      colour && styles[colour], // predefined styles colors for backgroundColor
      colour && !styles[colour] && { backgroundColor: colour }, // custom backgroundColor
      style
    ];

    if (gradient) {
      return (
        <TouchableOpacity
          style={buttonStyles}
          activeOpacity={opacity}
          {...props}
        >
          <LinearGradient
            start={start}
            end={end}
            locations={locations}
            style={buttonStyles}
            colors={[startColour, endColour]}
          >
            {children}
          </LinearGradient>
        </TouchableOpacity>
      );
    }

    return (
      <TouchableOpacity
        style={buttonStyles}
        activeOpacity={opacity || 0.8}
        {...props}
      >
        {children}
      </TouchableOpacity>
    );
  }
}

AppButton.defaultProps = {
  startColor: colours.primary,
  endColor: colours.secondary,
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8,
  color: colours.white
};

export default AppButton;

const styles = StyleSheet.create({
  button: {
    borderRadius: sizes.radius,
    height: sizes.base * 3,
    justifyContent: "center",
    marginVertical: sizes.padding / 3
  },
  shadow: {
    shadowColor: colours.black,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 10
  },
  accent: { backgroundColor: colours.accent },
  primary: { backgroundColor: colours.primary },
  secondary: { backgroundColor: colours.secondary },
  tertiary: { backgroundColor: colours.tertiary },
  black: { backgroundColor: colours.black },
  white: { backgroundColor: colours.white },
  gray: { backgroundColor: colours.gray },
  gray2: { backgroundColor: colours.gray2 },
  gray3: { backgroundColor: colours.gray3 },
  gray4: { backgroundColor: colours.gray4 }
});