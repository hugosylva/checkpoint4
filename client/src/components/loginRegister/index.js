import React, {useState} from 'react';
import Axios from 'axios';
import "./style.css";

const LoginRegister = () => {

const [usernameReg, setUsernameReg ] = useState ('')
const [passwordReg, setPasswordReg ] = useState ('')

const register = () => {
  Axios.post("http://localhost:5000/register", {
    username: usernameReg,
    password: passwordReg,
  }).then((response) => {
    console.log(response)
  });
};

  return (
   <div>
    <div ClassName="registration">
      <h1>Registration</h1>
      <label>Username</label>
      <input type="text" onChange={(e) => {
          setUsernameReg(e.target.value)}}/>
      <label>Password</label>
      <input type="text" onChange={(e) => {
          setPasswordReg(e.target.value)}}/>
      <button onClick={register}>Register</button>
    </div>
    <div ClassName="login">
      <h1>Login</h1>
      <input type="text" placeholder='Username...' />
      <input type="text" placeholder='Password'/>
      <button>Enter</button>
    </div>4
   </div>
   
   );
};

export default LoginRegister;
