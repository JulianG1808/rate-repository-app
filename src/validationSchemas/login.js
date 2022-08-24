import * as yup from 'yup'

export const LoginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Invalid e-mail address')
    .required('E-mail is required'),
  password: yup
    .string()
    .min(8, 'Password too short, must be 8 characters minimum')
    .max(100, 'Password too long, must be 100 characters maximum')
    .required('Password is required')
})