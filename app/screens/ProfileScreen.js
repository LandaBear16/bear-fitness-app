import React, { useContext } from 'react'
import { StyleSheet } from 'react-native'
import { FirebaseContext } from '../context/FirebaseContext'
import { UserContext } from '../context/UserContext'

import * as Yup from 'yup'

import AppForm from '../components/form/AppForm'
import AppFormField from '../components/AppFormField'
import LinearGradientScreen from '../components/LinearGradientScreen'
import SubmitButton from '../components/form/SubmitButton'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email')
})

const ProfileScreen = () => {
  
  const firebase = useContext(FirebaseContext)
  const [user, setUser] = useContext(UserContext)

  const handleUpdate = async ({ fullName, email }) => {
    await firebase.updateUser(fullName, email, user.uid)
  }

  return (
    <Screen style={styles.container}>
    <LinearGradientScreen />
      {user !== null && <AppForm
        initialValues={{
          email: user.email,
          fullName: user.fullName
        }}
        onSubmit={values => handleUpdate(values)}
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
    justifyContent: 'center',
    padding: 20
  }
})

export default ProfileScreen
