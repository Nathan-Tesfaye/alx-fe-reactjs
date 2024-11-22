import { useFormik } from 'formik';
import { basicSchema } from '../schemas';


const onSubmit = (e) => {
  e.preventDefault();
  console.log("Submitted!");
}

const Formik = () => {

  const { values, errors, handleChange, handleSubmit }= useFormik({
    initialValues: {
      username: "",
      email: "",
      password: ""
    },
    validationSchema: basicSchema, 
    onSubmit,
  });

  console.log(errors);

  return (
    <form onSubmit={handleSubmit} style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: 5
    }}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" value={values.username} onChange={handleChange}  />
      {errors.username && <p style={{color: "red"}}>{errors.username}</p>}

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="email"  value={values.email} onChange={handleChange} />
      {errors.email && <p style={{color: "red"}}>{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password"  value={values.password} onChange={handleChange} />
      {errors.password && <p style={{color: "red"}}>{errors.password}</p>}

      <button type="submit" style={{
        padding: '0.8em',
        background: 'orange',
        border: 0,
        borderRadius: '10px',
        fontSize: 'bold'
      }}>Submit</button>

    </form>
  )
}

export default Formik