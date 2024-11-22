// formikConfig.js
import * as yup from 'yup';

// Validation schema for the form fields
export const validationSchema = yup.object({
  username: yup.string().required('Username is required'),
  email: yup.string().email('Invalid email format').required('Email is required'),
  password: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Password is required'),
});

// Initial values for the form fields
export const initialValues = {
  username: '',
  email: '',
  password: '',
};

// Form submission handler
export const onSubmit = (values) => {
  console.log('Form data:', values);
};
