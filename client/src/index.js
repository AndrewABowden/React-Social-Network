import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { combineReducers } from 'redux'
import AddTodo from "./components/AddTodo";
// import Visibility 



ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
