import React, { useState, useContext } from 'react';
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'
import { FirebaseContext } from '../context/FirebaseContext'
import { UserContext } from '../context/UserContext'


import AppForm from '../components/form/AppForm'
import AppFormField from '../components/AppFormField'
import LinearGradientScreen from '../components/LinearGradientScreen'
import SubmitButton from '../components/form/SubmitButton'
import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const RegisterScreen = (props) => {
  const firebase = useContext(FirebaseContext)
  const [user, setUser] = useContext(UserContext)

  const onRegisterPress = async (user) => {
    try {
      await firebase.createUser(user)

      const uid = firebase.getCurrentUser().uid
      console.log("🚀 ~ file: LoginScreen.js ~ line 29 ~ handleLogin ~ uid", uid)

      const userInfo = await firebase.getUserInfo(uid)
      console.log("🚀 ~ file: LoginScreen.js ~ line 28 ~ handleLogin ~ userInfo", userInfo)

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
          fullName: '',
          email: '',
          password: ''
        }}
        onSubmit={values => onRegisterPress(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false} 
          icon='account'
          keyboardType='default'
          name='fullName'
          placeholder='Name'
        />
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
        <SubmitButton title='Register' />
        
      </AppForm>

    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
  },
})

export default RegisterScreen;