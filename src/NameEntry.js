import React, { Component } from 'react';
import './App.css';

class NameEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      value: '',
    }
}

  enterText = (event) => {
    this.setState({value: event.target.value});
  }

  addName = (event) => {
    this.setState({
      name: [this.state.value],
      value: '',
    });
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.enterText}/>
        <button onClick={this.addName}>Submit</button>
      </div>
    );
  }
}

export default NameEntry;