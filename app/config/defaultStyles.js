import { Platform } from 'react-native'

import colours from './colours'

export default {
  text: {
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    color: colours.dark
  }
}