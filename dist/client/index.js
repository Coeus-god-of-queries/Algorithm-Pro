import React from 'react';
import { render } from 'react-dom';
import App from './App';
// import { Provider } from 'react-redux';
// import store from './state/store';
render(React.createElement(App, null), document.querySelector('#app'));
//render(<App />, document.querySelector('#app'));
