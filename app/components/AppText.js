// just copy this code from the driving repo :)
import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import {colours, sizes, fonts} from "../config/theme";

export default class Typography extends Component {
  render() {
    const {
      h1,
      h2,
      h3,
      largeTitle,
      title,
      body,
      caption,
      small,
      size,
      transform,
      align,
      // styling
      regular,
      bold,
      semibold,
      medium,
      weight,
      light,
      center,
      right,
      spacing, // letter-spacing
      height, // line-height
      // colours
      colour,
      accent,
      primary,
      secondary,
      neonBlue,
      black,
      white,
      gray,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      h1 && styles.h1,
      h2 && styles.h2,
      h3 && styles.h3,
      largeTitle && styles.largeTitle,
      title && styles.title,
      body && styles.body,
      caption && styles.caption,
      small && styles.small,
      size && { fontSize: size },
      transform && { textTransform: transform },
      align && { textAlign: align },
      height && { lineHeight: height },
      spacing && { letterSpacing: spacing },
      weight && { fontWeight: weight },
      regular && styles.regular,
      bold && styles.bold,
      semibold && styles.semibold,
      medium && styles.medium,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      colour && styles[colour],
      colour && !styles[colour] && { colour },
      // colour shortcuts
      accent && styles.accent,
      primary && styles.primary,
      secondary && styles.secondary,
      neonBlue && styles.neonBlue,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      style // rewrite predefined styles
    ];
    
    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontSize: sizes.font,
    color: colours.black
  },
  // variations
  regular: {
    fontWeight: "normal"
  },
  bold: {
    fontWeight: "bold"
  },
  semibold: {
    fontWeight: "500"
  },
  medium: {
    fontWeight: "500"
  },
  light: {
    fontWeight: "200"
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colours
  primary: { color: colours.primary },
  secondary: { color: colours.secondary },
  black: { color: colours.black },
  white: { color: colours.white },
  gray: { color: colours.gray },
  neonBlue: { color: colours.neonBlue},
  // fonts
  h1: fonts.h1,
  h2: fonts.h2,
  h3: fonts.h3,
  largeTitle: fonts.largeTitle,
  title: fonts.title,
  body: fonts.body,
  caption: fonts.caption,
  small: fonts.small
});