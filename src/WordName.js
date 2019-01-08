import React, { Component } from 'react';
import './App.css';


class Names extends Component {
  
      allToLowerCase = () => {
        const toLowerCase = this.props.newName.map(name => {
          return name.toLowerCase();
        })
        return toLowerCase;
      }
    
     concatString = () => {
        const combineString = this.props.name.replace(/ +/g, "").toLowerCase();
        return combineString.split('');
      }

     evaluateNames = () => {
        const arrAlikes = this.allToLowerCase().reduce((acc,string,index) => {
         if(this.concatString().every(letter => {
             return string.includes(letter)}) )  {
                 acc.push(this.props.newName[index])
          }
         return acc
        }, []);
        
        return arrAlikes
      }
    

    render() {  
      return (
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

