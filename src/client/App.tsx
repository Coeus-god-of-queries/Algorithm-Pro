import React from 'react';
import { render } from 'react-dom';
import Home from './Components/Home';
import Login from './Components/Login';

const App = () => {
  return (
    <div>
      <h1>Coeus</h1>
      <Home />
      <Login />
    </div>
  );
}

render(<App />, document.querySelector('#root'));