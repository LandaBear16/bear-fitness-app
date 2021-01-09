import React from 'react'
import { Text } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput from './AppTextInput'
import ErrorMessage from './form/ErrorMessage'

function AppFormField({ name, ...otherProps }) {

  const { errors, touched } = useFormikContext()

  return (
    <>
      <AppTextInput
        name={name}
        {...otherProps}
      />
      <ErrorMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormField;