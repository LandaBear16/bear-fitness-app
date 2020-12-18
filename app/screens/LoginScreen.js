import React from 'react';
import { StyleSheet } from 'react-native'

import AppForm from '../components/form/AppForm'
import AppFormField from '../components/AppFormField'
import colours from '../config/colours'
import Screen from '../components/Screen'

const LoginScreen = () => {

  return (
    <Screen>
      <AppForm>
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false} 
          icon='email'
          keyboardType='email-address'
          name='email'
          placeholder='Email'
          textContentType='emailAddress'
        />
        <AppFormField 
          autoCapitalize='none'
          autoCorrect={false}
          icon='lock'
          name='password'
          placeholder='Password'
          secureTextEntry
          textContentType='password'
        />
      </AppForm>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
})
export default LoginScreen