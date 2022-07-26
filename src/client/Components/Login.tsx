import React, { useState, useRef, useEffect } from 'react';

const Login = (): JSX.Element => {
  const username = useRef<HTMLInputElement>(null); //how to get around forbidden null assertions
  const password = useRef<HTMLInputElement>(null);
  
  const handleLogin = (e : React.MouseEvent<HTMLButtonElement>) : void => {
    const user = username.current?.value;
    const pass = password.current?.value;

    //make a post fetch request with user + pass sent as body
    //dispatch an action once logged in
  };

  //testing user object that's being returned and its state
  return( 
    <>
      <input ref={username}></input>
      <input ref={password}></input>
      <button onClick={(e) => handleLogin(e)}></button>
    </>
  );
};

export default Login;