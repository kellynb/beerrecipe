import React, { Component } from 'react';
import WordName from './WordName';
import './App.css';

class NameEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: [],
      newNames: [],
      value: '',
    } 
}

  enterText = (event) => {
    this.setState({value: event.target.value});
  }

  fetchData = () => {
    fetch('https://uinames.com/api/?region=united states&amount=500')
    .then(data => {
        return data.json();
    }).then(data => {
        const allNames = data.map((person) => `${person.name} ${person.surname}`)
        this.setState({newNames: allNames})
    })
    
  }

  addName = (event) => {
    this.setState({
      name: [this.state.value],
      value: '', 
      newNames: []
    });

    this.fetchData();

    
    event.preventDefault();

  }

  // renderNewName = () => {
  //   if (this.state.count > this.state.ticker) {
  //     console.log('boy');
  //     return <WordName name={this.state.name[0]}/>
  //   } 
    
  // }

 

  render() {

    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.enterText}/>
        <button onClick={this.addName}>Submit</button>
        <div>
          {this.state.name.length > 0 ? <WordName name={this.state.name[0]} newName={this.state.newNames}/> : null}
        </div>
      </div>      
    );
  }
}

export default NameEntry;