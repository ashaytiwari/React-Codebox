import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
export {default as Header} from "./components/Header"
export {default as Footer} from "./components/Footer"
export {default as PostLists} from './components/PostLists'
export {default as Home} from './components/Home'
export {default as UseState} from './components/UseState'
export {default as UseEffect} from './components/UseEffect'
export {default as UseReducer} from './components/UseReducer'


ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
); 

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
