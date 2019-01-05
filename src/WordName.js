import React, { Component } from 'react';
import './App.css';


class Names extends Component {

    
     concatString = () => {
        const combineString = this.props.name.replace(/ +/g, "").toLowerCase();
        return combineString.split('');
      }

     evaluateNames = () => {
        const arrAlikes = this.props.newName.filter(string => {
          return this.concatString().every(letter => {
            return string.includes(letter);
          })
        })
        return arrAlikes
      } 
    

    render() {  
      return (
        console.log('Hi'),
      <div className="Jumbo">
        <ul>
             {this.evaluateNames().length > 0 ?
               this.evaluateNames().map((name, index) => {
                return <li key={index}>{name}</li>
               }) : <p>Try Again</p> 
            }
        </ul>
      </div>
      )}
  }
  
  export default Names;

