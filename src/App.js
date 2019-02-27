import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyMap from './containers/MyMap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MyMap />
      </div>
    );
  }
}

export default App;
