import React from 'react'

import AppBlock from '../components/AppBlock'
import AppButtonBasic from '../components/AppButtonBasic'

const BottomNavigationButtons = ({ navigation, screenName, backName }) => {
  return (
    <AppBlock>
      <AppButtonBasic title='Back' onPress={() => navigation.navigate(backName) }/>
      <AppButtonBasic title='Next' onPress={() => navigation.navigate(screenName) }/>
    </AppBlock>
  )
}

export default BottomNavigationButtons
