import React, { Component } from 'react';
import './App.css';

class Names extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newNames: [],
        }
    }
    componentDidMount () {
        fetch('https://uinames.com/api/?region=united states&amount=500')
        .then(data => {
            return data.json();
        }).then(data => {
            const allNames = data.map((person) => `${person.name} ${person.surname}`)
            this.setState({newNames: allNames})
        })
    }
    
    render() {
      return (
      <div className="Jumbo">{this.state.newNames[Math.floor(Math.random())]}</div>
      )}
  }
  
  export default Names;

//   const concatName = person.name.concat(person.surname);
//   const nameToLowerCase = concatName.toLowerCase();
//   const splitToArr = nameToLowerCase.split('');
//   return splitToArr;