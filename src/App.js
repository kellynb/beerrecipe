import React, { Component } from 'react';
import './App.css';
import NameEntry from './NameEntry';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <NameEntry />
        </header>
      </div>
    );
  }
}

export default App;
