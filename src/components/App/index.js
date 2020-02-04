// this is the app component <App />
import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Intro from '../Intro';
import Series from '../../containers/Series';
import 'whatwg-fetch';

// components are capitalized and written like a self closing html tag


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>
            TV Series List
        </h1>
          <Intro message='Search here for all your favorites!' />
          <Series />
        </header>
      </div>
    );
  }
}

export default App;
