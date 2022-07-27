import React from 'react';
import { render } from 'react-dom';
import Home from './Components/Home';
import "./style.css"
import Login from './Components/Login';
import { Link, BrowserRouter, Routes, Route} from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <h1>Coeus</h1>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#root'));