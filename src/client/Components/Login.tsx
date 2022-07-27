import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = (): JSX.Element => {
  const username = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  
  
  //
  const handleLogin = (e:React.MouseEvent<HTMLButtonElement>) : void => {
    const usernameInput = username.current?.value;
    const passwordInput = password.current?.value;


    //user: admin
    //pass: 123456
    axios.post('/login', {
      username: usernameInput,
      password: passwordInput
    })
    .then((response) => {
      console.log(response);
      navigate('/home', { state: response.data });
    })
    .catch((error) => {
      console.log(error);
    });

    //reset input fields
    if (username.current !== null && password.current !== null) {
    username.current.value = '';
    password.current.value = '';
    }
  };

  const handleSignup = (e:React.MouseEvent<HTMLButtonElement>): void => {
    //to be created
  }

  //testing user object that's being returned and its state
  //potentially use this as a login form but clean it up by centering and formatting it
  //https://codesandbox.io/s/login-form-material-ui-u1xjl?from-embed=&file=/src/App.js
  return( 

    <div id='login-container'>
      navbar or just title here
      <br />
      
      <div id='login-field-container'>
        <input id='username-field' placeholder='Username' ref={username}></input>
        <input id='password-field' type='password' placeholder='Password' ref={password}></input>
      </div>
      
      <div id='login-button-container'>
        <button onClick={(e) => handleSignup(e)}>Sign Up</button>
        <button onClick={(e) => handleLogin(e)}>Login</button>
      </div>

    </div>
  );
};

export default Login;
