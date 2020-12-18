import React from 'react'
import { Text } from 'react-native'
import { useFormikContext } from 'formik'

import AppTextInput from './AppTextInput'
import defaultStyles from '../config/defaultStyles'

function AppFormField({ name, ...otherProps }) {

  const {setFieldTouched, handleChange, errors, touched} = useFormikContext()

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
      <Text style={defaultStyles.text}>{errors[name]}</Text>
    </>
  );
}

export default AppFormField;