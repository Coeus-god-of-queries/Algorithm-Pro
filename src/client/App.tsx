import React from 'react';
import { render } from 'react-dom';
import Home from './Components/Home';
import "./style.css"
import Login from './Components/Login';
import { Link, BrowserRouter, Routes, Route} from "react-router-dom";
import { Whiteboard } from './Components/Whiteboard';
import Navbar from './Components/Navbar'

const App = () => {
  return (
    <BrowserRouter>
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
        <Route path="/whiteboard" element={<Whiteboard/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

render(<App />, document.querySelector('#root'));