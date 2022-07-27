import React from 'react';
import { render } from 'react-dom';
import Home from './Components/Home';
import "./style.css"
import Login from './Components/Login';
import { Link, BrowserRouter, Routes, Route} from "react-router-dom";
import { Whiteboard } from './Components/Whiteboard';

const App = () => {
  return (
    <div>
    <Whiteboard/>
      </div>
  );
}

render(<App />, document.querySelector('#root'));