import React from 'react';
import logo from './logo.svg';
import './App.css';
import Card from './components/Card.js';
import Navbar from './components/Navbar.js';

// a component can be created through a function
// a component is a visual snippet
// return is the thing you see, can only be one thing
function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
      <Card></Card>
    </div>
  );
}

export default App;
