import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { useFormikContext } from 'formik'

import colours from '../config/colours'



function AppTextInput({ icon, name, ...otherProps }) {
  const { values, handleChange, handleBlur } = useFormikContext()
  return (
    <View style={styles.container}>
      {icon && <MaterialCommunityIcons name={icon} size={20} color={colours.medium} style={styles.icon} />}
      <TextInput 
        placeholderTextColor={colours.medium}
        onChangeText={handleChange(name)}
        onBlur={handleBlur(name)}
        defaultValue={values[name]}
        {...otherProps} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colours.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10
  },
  icon: {
    marginRight: 10
  }
})
export default AppTextInput;