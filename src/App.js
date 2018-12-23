import React, { Component } from 'react';
import './App.css';
import Names from './WordName';
import NameEntry from './NameEntry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameEntry />
          <Names />
        </header>
      </div>
    );
  }
}

export default App;
