import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import './index.css';
import App from './app/app.js';
import registerServiceWorker from './registerServiceWorker';

const initialState = { count: 1 };
const reducer = (state, action) => {
  switch (action.type) {
    case 'TEST':
      state.count++;
      return state;
    default:
      return state;
  }
};
const store = createStore(reducer, initialState);

const render = () => {
  ReactDOM.render((
    <BrowserRouter>
      <App store={store}/>
    </BrowserRouter>
  ), document.getElementById('root'), null);
}

render()
store.subscribe(render)
// registerServiceWorker();