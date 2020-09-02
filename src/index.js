//import react
import React from 'react';
//import react dom
import ReactDOM from 'react-dom';
//import styles
import './index.css';
//import app component
import App from './App';
//import hash router component
import { HashRouter as Router } from 'react-router-dom';

ReactDOM.render(
	<Router basename='/'>
		<App />
	</Router>,
	document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
