import React, { useContext, useEffect } from 'react'
import { Text, StyleSheet } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../redux/action/auth'
import { FirebaseContext } from '../context/FirebaseContext'

import * as Yup from 'yup'

import AppForm from '../components/form/AppForm'
import AppFormField from '../components/AppFormField'
import LinearGradientScreen from '../components/LinearGradientScreen'
import SubmitButton from '../components/form/SubmitButton'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const ProfileScreen = () => {
  
  const firebase = useContext(FirebaseContext)
  const dispatch = useDispatch()
  const updateUser = user => dispatch(setUser(user))
  const { user } = useSelector(state => state.auth)

  useEffect(() => {
   userInformation()
  }, [])

  const userInformation = async () => {
    try {
      const uid = await firebase.getCurrentUser().uid
      console.log("🚀 ~ file: LoginScreen.js ~ line 29 ~ handleLogin ~ uid", uid)

      const userInfo = await firebase.getUserInfo(uid)
      console.log("🚀 ~ file: LoginScreen.js ~ line 28 ~ handleLogin ~ userInfo", userInfo)

      updateUser(userInfo)
    } catch (error) {
      console.error(error)
    }
   
  }

  return (
    <Screen style={styles.container}>
    <LinearGradientScreen />
      {user !== null && <AppForm
        initialValues={{
          email: user.email,
          fullName: user.fullName
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
        <SubmitButton title='Save' />
        
      </AppForm>}
    </Screen>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  }
})

export default ProfileScreen
