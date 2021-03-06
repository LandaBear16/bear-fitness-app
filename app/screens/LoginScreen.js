import React, { useState, useContext } from 'react';
import { StyleSheet, Text, Image, View } from 'react-native'
import * as Yup from 'yup'
import { FirebaseContext } from '../context/FirebaseContext'
import { UserContext } from '../context/UserContext'

import AppForm from '../components/form/AppForm'
import AppFormField from '../components/AppFormField'
import LinearGradientScreen from '../components/LinearGradientScreen'
import SubmitButton from '../components/form/SubmitButton'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = () => {
  const [message, setMessage] = useState("")
  const firebase = useContext(FirebaseContext)
  const [user, setUser] = useContext(UserContext)


  const handleLogin = async ({email, password}) => {
    try {
      await firebase.login(email, password)

      const uid = firebase.getCurrentUser().uid

      const userInfo = await firebase.getUserInfo(uid)

      setUser({
        fullName: userInfo.fullName,
        email: userInfo.email,
        uid,
        isLoggedIn: true
      })

    } catch (error) {
      console.error(error)
    }
  }
  return (
    <Screen style={styles.container}>
    <LinearGradientScreen/>
      <AppForm
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={values => handleLogin(values)}
        validationSchema={validationSchema}
      >
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
        <SubmitButton title='Login' />
      </AppForm>
      <Text>{message}</Text>
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    padding: 10,
    justifyContent: 'center'
  }
})
export default LoginScreen