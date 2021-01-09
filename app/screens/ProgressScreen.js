import React, { useContext, useEffect } from 'react'
import { View, Text } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { setUser } from '../redux/action/auth'
import { FirebaseContext } from '../context/FirebaseContext'
import { generateAgeRange } from '../common/constants/pickerCategories'

import * as Yup from 'yup'

import AppForm from '../components/form/AppForm'
import AppFormField from '../components/AppFormField'
import AppFormPicker from '../components/form/AppFormPicker'
import SubmitButton from '../components/form/SubmitButton'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const ProgressScreen = () => {
  
  // const firebase = useContext(FirebaseContext)
  // const dispatch = useDispatch()
  // const updateUser = user => dispatch(setUser(user))
  // const { user } = useSelector(state => state.auth)


  // const userInformation = async () => {
  //   try {
  //     const uid = await firebase.getCurrentUser().uid
  //     console.log("🚀 ~ file: LoginScreen.js ~ line 29 ~ handleLogin ~ uid", uid)

  //     const userInfo = await firebase.getUserInfo(uid)
  //     console.log("🚀 ~ file: LoginScreen.js ~ line 28 ~ handleLogin ~ userInfo", userInfo)

  //     updateUser(userInfo)
  //   } catch (error) {
  //     console.error(error)
  //   }
   
  // }

  const categories = [
    { label: "Furniture", value: 1 },
    { label: "Clothing", value: 2 },
    { label: "Camera", value: 3 },
  ]

  return (
    <Screen>
      <Text>Profile Screen</Text>
      <AppForm
        initialValues={{
          age: '',
          height: '',
          weight: '',
          gender: '',
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
        <AppFormPicker items={generateAgeRange()} name='Age' placeholder='Select Age' />
        <AppFormPicker items={generateAgeRange()} name='Height' placeholder='Height' />
        <AppFormPicker items={generateAgeRange()} name='Weight' placeholder='Weight' />
        <AppFormPicker items={generateAgeRange()} name='Gender' placeholder='Gender' />
        <SubmitButton title='Save' />
        
      </AppForm>
    </Screen>
  )
}

export default ProgressScreen
