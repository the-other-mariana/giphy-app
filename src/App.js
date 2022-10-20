import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import Navbar from './components/Navbar.js';

const APIKEY = 'XCp5X3JojAaVPB4Iz8D0LddKfEtGqmC8';
const gifs = 5;

// a component can be created through a function
// a component is a visual snippet
// return is the thing you see, can only be one thing
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
        titles: [],
        usernames: [],
        srcs: []
    }
    this.updateState = this.updateState.bind(this) 
    this.fetchData();
  }
  updateState(obj){ 
    // Changing state 
    var usernames = this.state.usernames;
    usernames.push(obj.username)
    var titles = this.state.titles;
    titles.push(obj.title)
    var srcs = this.state.srcs;
    srcs.push(obj.src)
    this.setState({ titles: titles, usernames: usernames, srcs: srcs }) 
  } 

  fetchData(){
    for (var i = 0; i < gifs; i++){
      const url = `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}&limit=1`;
      // fetch has two promises, 1st then gets the response, the 2nd then gets the data
      fetch(url)
      .then(res => res.json())
      .then(content => {
        // responses from giphy api have 3 components: data pagination meta
        console.log(content.data.title + " by-> "+ content.data.username);
        console.log(content.data);
        this.updateState({
          title: content.data.title,
          username: content.data.username,
          src: content.data.images.downsized.url
        })
      })
      .catch((err) => {
        console.error('Error at fetching from the url: ' + err);
      });
    }
    
  }
  render() {
    const cards = [];
    for (let i = 0; i < gifs; i++) {
      cards.push(<Card key={i} user={this.state.usernames[i]} title={this.state.titles[i]} src={this.state.srcs[i]}></Card>);
    }
    return (
      <div>
        <Navbar></Navbar>
        {cards}
      </div>
    );
  }
}

export default App;
