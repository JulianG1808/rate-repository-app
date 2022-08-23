import React from "react";
import { View, Button, StyleSheet } from 'react-native'
import { Formik, useField } from "formik";
import StyledTextInput from "../components/StyledTextInput";
import StyledText from "../components/StyledText";

const initialValues = {
  email: '',
  password: ''
}

const FormikInputValue = ({ name, ... props }) => {
  const [ field, meta, helpers ] = useField(name)

  return (
    <>
      <StyledTextInput
        error={meta.error}
        value={field.value}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <StyledText style={styles.error}>{meta.error}</StyledText>}
    </>
  )
}

const validate = values => {
  const errors = {}

  if(!values.email) {
    errors.email = 'Email is required'
  }
  else if(!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i.test(values.email)) {
    errors.email = 'invalid email address'
  }

  console.log(errors)

  return errors
}

const LogInForm = () => {
  return (
    <Formik validate={validate} initialValues={initialValues} onSubmit={values => console.log(values)}>
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              name='email'
              placeholder='E-mail'
            />
            <FormikInputValue 
              name='password'
              placeholder='Password'
              secureTextEntry
            />
            <Button onPress={handleSubmit} title='Log in' />
          </View>
        )
      }}
    </Formik>
  )
}

const styles = StyleSheet.create({
  form: {
    margin: 12
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: 0
  }
})

export default LogInForm