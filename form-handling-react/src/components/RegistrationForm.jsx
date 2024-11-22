import { useState } from "react";
import { useForm } from "react-hook-form";


const RegistrationForm = () => {

  const [username, setUsername] =useState('');
  const [email, setEmail] =useState('');
  const [password, setPassword] =useState('');


  


  return (
    <div>
      <form style={{
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 5
    }} onSubmit={ (e) => {
      e.preventDefault();
      console.log(username);
      console.log(email);
      console.log(password);
    }}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" value={username} onChange={(e) => setUsername(e.target.value)} required: true />

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={email} onChange={ (e) => setEmail(e.target.value)} />

        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" value={password} onChange={ (e) => setPassword(e.target.value)} />

        <button type="submit" style={{
          backgroundColor:"purple",
          color: "white",
          padding: "0.5rem",
          borderRadius: "10px"
        }}>Register</button>
      </form>
    </div>
  )
}

export default RegistrationForm;