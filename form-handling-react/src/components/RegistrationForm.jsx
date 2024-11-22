import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema, initialValues, onSubmit } from './formikForm';

const RegistrationForm = () => {
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

export default RegistrationForm;
 


  
  