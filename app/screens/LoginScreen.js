import React, { useState } from 'react';
import { StyleSheet, Text } from 'react-native'
import * as Yup from 'yup'
import { firebase } from '../firebase/config'

import AppForm from '../components/form/AppForm'
import AppFormField from '../components/AppFormField'
import SubmitButton from '../components/form/SubmitButton'
import Screen from '../components/Screen'

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const LoginScreen = () => {
  const [message, setMessage] = useState("")

  const onLoginPress = ({ email, password }) => {
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((response) => {

            const uid = response.user.uid
            const usersRef = firebase.firestore().collection('users')
            usersRef
                .doc(uid)
                .get()
                .then(firestoreDocument => {

                    if (!firestoreDocument.exists) {
                        alert("User does not exist anymore.")
                        return;
                    }
                    const user = firestoreDocument.data()
                    setMessage("User logged in succesfully")
                })
                .catch(error => {
                    console.log('error', error)
                    setMessage("User Not logged in")
                    alert(error)
                });
        })
        .catch(error => {
            alert(error)
        })
}

  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          email: '',
          password: ''
        }}
        onSubmit={values => onLoginPress(values)}
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
    padding: 10
  },
})
export default LoginScreen