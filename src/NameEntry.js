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
      gender: null
    } 
}

  handleCheck = (event) => {
    const target = event.target;
    const gender = target.id;
    this.setState({gender: gender})
  }

  enterText = (event) => {
    this.setState({value: event.target.value});
  }

  fetchData = () => {
   if(this.state.gender === 'girl') {
      fetch('https://uinames.com/api/?region=united states&amount=500&gender=female')
      .then(data => {
          return data.json();
      }).then(data => {
          const allNames = data.map((person) => `${person.name} ${person.surname}`)
          this.setState({newNames: allNames,
                        name: [this.state.value],
                        value: ''})
      })
    } else if (this.state.gender === 'boy') {
        fetch('https://uinames.com/api/?region=united states&amount=500&gender=male')
        .then(data => {
            return data.json();
        }).then(data => {
            const allNames = data.map((person) => `${person.name} ${person.surname}`)
            this.setState({newNames: allNames,
                           name: [this.state.value],
                           value: ''})
        })
    } else {
      fetch('https://uinames.com/api/?region=united states&amount=500')
        .then(data => {
            return data.json();
        }).then(data => {
            const allNames = data.map((person) => `${person.name} ${person.surname}`)
            this.setState({newNames: allNames,
                           name: [this.state.value],
                           value: ''})
        })
    }
  }

  addName = (event) => {
    if (this.state.value !== '') {
        this.setState({
        name: [],
        newNames: []
      });
    this.fetchData();
    }
    
    event.preventDefault();
  }

  render() {

    return (
      <div>
        <div>
          <label>
            Boy
            <input name="checked" id='boy' type="radio" onChange={this.handleCheck}/>
          </label>
          <label>
            Girl
            <input name="checked" id='girl' type="radio" onChange={this.handleCheck}/>
          </label>
          <label>
            Both
            <input name="checked" id='both' type="radio" onChange={this.handleCheck}/>
          </label>
        </div>
        <div>
            <input type="text" value={this.state.value} onChange={this.enterText}/>
            <button onClick={this.addName}>Submit</button>
          </div>
          <div>
              {this.state.name.length > 0 
                ? <WordName name={this.state.name[0]} newName={this.state.newNames}/> 
                : null}
        </div>
      </div>      
    );
  }
}

export default NameEntry;