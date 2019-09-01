import React from 'react';
import ReactDOM from 'react-dom';
//import { render } from 'react-dom';
import {Provider} from 'react-redux'
import { applyMiddleware, createStore } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { logger } from 'redux-logger'

import allReducers from './reducers';
import App from './components/app';


import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

import 'bootstrap/dist/js/bootstrap.js';

import 'css-aspect-ratio/css-aspect-ratio.css';

const store=createStore(
	allReducers,
	applyMiddleware(
		thunkMiddleware,logger
	)
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>, 
	document.getElementById('root')
);