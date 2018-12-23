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

     concatString = () => {
        const combineString = this.props.name.replace(/ +/g, "").toLowerCase();
        return combineString.split('');
      }

     evaluateNames = () => {
        const arrAlikes = this.state.newNames.filter(string => {
          return this.concatString().every(letter => {
            return string.includes(letter);
          })
        })
        return arrAlikes
      }
    
    render() {
      return (
      <div className="Jumbo">
        {this.evaluateNames()}
    </div>
      )}
  }
  
  export default Names;

//   const concatName = person.name.concat(person.surname);
//   const nameToLowerCase = concatName.toLowerCase();
//   const splitToArr = nameToLowerCase.split('');
//   return splitToArr;