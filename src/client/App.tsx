import React from 'react';
import { render } from 'react-dom';
import Home from './Components/Home';
<<<<<<< HEAD
import "./style.css"
=======
import Login from './Components/Login';
>>>>>>> dev

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