import React, { Component } from "react";
import { StyleSheet } from "react-native";

import AppBlock from "./AppBlock";
import {colours, sizes} from '../config/theme'

export default class AppBadge extends Component {
  render() {
    const { children, style, size, colour, ...props } = this.props;

    const badgeStyles = StyleSheet.flatten([
      styles.badge,
      size && {
        height: size,
        width: size,
        borderRadius: size
      },
      style
    ]);

    return (
      <AppBlock
        flex={false}
        middle
        center
        color={colour}
        style={badgeStyles}
        {...props}
      >
        {children}
      </AppBlock>
    );
  }
}

const styles = StyleSheet.create({
  badge: {
    height: sizes.base,
    width: sizes.base,
    borderRadius: sizes.border
  }
});