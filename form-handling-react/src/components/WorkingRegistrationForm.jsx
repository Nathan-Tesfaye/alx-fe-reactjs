
import React from 'react';
import { useState } from 'react';

const WorkingRegistrationForm = () => {


  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  })

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    
    const {name, value} = e.target;

    setFormData( (prev) => ({
      ...prev,
      [name]: value
    }))

    setErrors( (prev) => ({
      ...prev,
      [name]: ""
    }))
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {}

    if (!formData.username) {
      newErrors.username = "Username is required."
    }
    
    if (!formData.email) {
      newErrors.email = "Email is required."
    }
    
    if(!formData.password) {
      newErrors.password = "Password is required."
    }


    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
    }
  }

  return (
    <div>
      <form style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        gap: 5
      }} 
      onSubmit={handleSubmit}>
        
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={formData.username} onChange={handleChange} />
        {errors.username && <p style={{color: "red"}}>{errors.username}</p> }

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} />
        {errors.email && <p style={{color: "red"}}>{errors.email}</p>  }

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={formData.password} onChange={handleChange}/>
        {errors.password && <p style={{color: "red"}}>{errors.password}</p> }

        <button type="submit">Register</button>
      </form>
    </div>
  )
}

export default WorkingRegistrationForm; 