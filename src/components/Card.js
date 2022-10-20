import React from 'react';
import './Card.css'; // use the css

// a component is a function or a class

function Card (props) {
  return (
    <div className="card">
      <h1 className="card-title"> Title </h1>
      <h2> Username: {props.data} </h2>
      <p> Description </p>
      <img></img>
    </div>
  );
}

// so that other files can use Card
export default Card;