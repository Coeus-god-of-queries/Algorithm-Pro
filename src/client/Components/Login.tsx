import axios from 'axios';
import React, { useState, useRef, useEffect } from 'react';

const Login = (): JSX.Element => {
  const username = useRef<HTMLInputElement>(null); //how to get around forbidden null assertions
  const password = useRef<HTMLInputElement>(null);
  
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
