import React from 'react';
import { useFormikContext } from 'formik'

import AppTextInput from './AppTextInput'

function AppFormField({ name, ...otherProps }) {

  const {setFieldTouched, handleChange} = useFormikContext()

  return (
    <>
      <AppTextInput
        onBlur={() => setFieldTouched(name)}
        onChangeText={handleChange(name)}
        {...otherProps}
      />
    </>
  );
}

export default AppFormField;