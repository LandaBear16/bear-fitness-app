import React from 'react';
import { StyleSheet, Image } from 'react-native'
import * as Yup from 'yup'


import AppForm from '../components/form/AppForm'
import AppFormField from '../components/AppFormField'
import SubmitButton from '../components/form/SubmitButton'
import Screen from '../components/Screen';


const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label('Email'),
  password: Yup.string().required().min(4).label('Password')
})

const RegisterScreen = (props) => {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={{
          name: '',
          email: '',
          password: ''
        }}
        onSubmit={values => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormField
          autoCapitalize='none'
          autoCorrect={false} 
          icon='account'
          keyboardType='default'
          name='name'
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
    padding: 10
  },
})

export default RegisterScreen;