// practice file with examples from course

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


const getCurrentDate = () => {
    const date = new Date();
    return date.toDateString();
}
const greeting = <h1>Hello freaking world! Current date: {getCurrentDate()}</h1>;

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(greeting, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
