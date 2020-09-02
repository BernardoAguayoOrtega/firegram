//import react
import React from 'react';
//import react dom
import { render } from 'react-dom';
//import styles
import './index.css';
//import app component
import App from './App';
//import hash router component
import { HashRouter as Router } from 'react-router-dom';

//render react dom
render(
	<Router basename='/'>
		<App />
	</Router>,
	document.getElementById('root'),
);
