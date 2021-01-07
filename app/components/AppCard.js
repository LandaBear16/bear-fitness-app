import React from "react"
import { StyleSheet } from "react-native"

import AppBlock from './AppBlock'
import {colours, sizes} from '../config/theme'

const AppCard = ({ colour, style, children, ...props }) => {
  const cardStyles = [styles.card, style]
  return (
    <AppBlock color={colour || colours.white} style={cardStyles} {...props}>
      {children}
    </AppBlock>
  )
}

export const styles = StyleSheet.create({
  card: {
    borderRadius: sizes.radius,
    padding: sizes.base + 4,
    marginBottom: sizes.base
  }
})

export default AppCard