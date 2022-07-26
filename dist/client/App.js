import React from 'react';
import Home from './components/Home';
import Login from './components/Login';
//import './styles/index.css';
function App() {
    return (React.createElement(React.Fragment, null,
        "hello",
        React.createElement(Home, null),
        React.createElement(Login, null)));
}
export default App;
