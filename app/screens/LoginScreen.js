import React, { useState } from 'react';
import { StyleSheet, Image, TextInput, Text, View } from 'react-native'

import AppForm from '../components/form/AppForm'
import colours from '../config/colours'
import Screen from '../components/Screen'

const LoginScreen = () => {
  const [email, onChangeEmail] = useState('Email');
  const [password, onChangePassword] = useState('Password');

  return (
    <Screen>
      <AppForm>
      <View style={styles.container}>
        <TextInput
          onChangeText={text => onChangeEmail(text)}
          value={email}
        />
      </View>
      <View>
        <TextInput 
          onChangeText={text => onChangePassword(text)}
          value={password}/>
      </View>
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