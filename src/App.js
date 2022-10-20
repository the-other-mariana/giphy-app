import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import Navbar from './components/Navbar.js';

const APIKEY = 'XCp5X3JojAaVPB4Iz8D0LddKfEtGqmC8';

// a component can be created through a function
// a component is a visual snippet
// return is the thing you see, can only be one thing
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        results: []
    }
    this.updateState = this.updateState.bind(this) 
    this.fetchData();
  }
  updateState(obj){ 
    // Changing state 
    var temp = this.state.results;
    temp.push(obj)
    this.setState({results: temp}) 
  } 

  fetchData(){
    for (var i = 0; i < 5; i++){
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&limit=1`;
      // fetch has two promises, 1st then gets the response, the 2nd then gets the data
      fetch(url)
      .then(res => res.json())
      .then(content => {
        // responses from giphy api have 3 components: data pagination meta
        console.log(typeof(content.data.username));
        console.log(content.data.length);
        console.log(content);
        this.updateState(content.data.username)
      })
      .catch((err) => {
        console.error('Error at fetching from the url: ' + err);
      });
    }
    
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Card data={this.state.results[0]}></Card>
        <Card data={this.state.results[1]}></Card>
        <Card data={this.state.results[2]}></Card>
        <Card data={this.state.results[3]}></Card>
        <Card data={this.state.results[4]}></Card>
      </div>
    );
  }
}

export default App;
