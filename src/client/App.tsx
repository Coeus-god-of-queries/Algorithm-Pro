import React from 'react';
import { render } from 'react-dom';
import Home from './Components/Home';
import "./style.css"
import Login from './Components/Login';
import { Link, BrowserRouter, Routes, Route} from "react-router-dom";
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#root'));