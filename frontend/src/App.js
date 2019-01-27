import React, { Component } from 'react';
import logo from './logo.svg';
import RegForm from './regForm.js';
import Login from './login.js';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <RegForm></RegForm>
          <Login></Login>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          > Learn React </a>
        </header>
      </div>
    );
  }
}

export default App;
