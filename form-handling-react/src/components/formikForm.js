import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const formikForm = () => {


  const validationSchema = Yup.object({
    username: Yup.string().required('Username is required'),
    email: Yup.string().email('Invalid email format').required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
  });

  const initialValues = {
    username: '',
    email: '',
    password: '',
  };

  const onSubmit = (values) => {
    console.log('Form data:', values);
  };
  

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {() => (
        <Form style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <label htmlFor="username">Username</label>
          <Field
            type="text"
            name="username"
            id="username"
            placeholder="Enter your username"
          />
          <ErrorMessage name="username" component="div"/>

          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
          />
          <ErrorMessage name="email" component="div"/>

          <label htmlFor="password">Password</label>
          <Field
            type="password"
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          <ErrorMessage name="password" component="div" />

          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default formikForm;
 


  
  