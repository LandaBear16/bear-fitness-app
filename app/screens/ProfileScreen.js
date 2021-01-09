import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../redux/action/auth'
import { FirebaseContext } from '../context/FirebaseContext'

import * as Yup from 'yup'

import AppForm from '../components/form/AppForm'
import AppFormField from '../components/AppFormField'
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
    const uid = firebase.getCurrentUser().uid
      console.log("🚀 ~ file: LoginScreen.js ~ line 29 ~ handleLogin ~ uid", uid)

      const userInfo = await firebase.getUserInfo(uid)
      console.log("🚀 ~ file: LoginScreen.js ~ line 28 ~ handleLogin ~ userInfo", userInfo)

      updateUser(userInfo)
  }

  const initialValues = {
    email: user.email,
    fullName: user.fullName
  }

  return (
    <Screen>
      <Text>Profile Screen</Text>
      {user !== null && <AppForm
        initialValues={initialValues}
        onSubmit={values => onRegisterPress(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false} 
          icon='account'
          keyboardType='default'
          name='fullName'
          // value={values.email}
          // placeholder='Name'
        />
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false} 
          icon='email'
          keyboardType='email-address'
          name='email'
          // placeholder='Email'
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
        
      </AppForm>}
    </Screen>
  )
}

export default ProfileScreen
