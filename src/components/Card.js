import React from 'react';
import './Card.css'; // use the css

// a component is a function or a class

function Card (props) {
  return (
    <div className="card">
      <h1 className="card-title"> Title: {props.title} </h1>
      <h2> Username: {props.user} </h2>
      <p> Description </p>
      <div >
        <img src={props.src}></img>
      </div>
      
    </div>
  );
}

// so that other files can use Card
export default Card;