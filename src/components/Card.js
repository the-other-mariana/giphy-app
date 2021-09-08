import React from 'react';
import './Card.css'; // use the css

// a component is a function or a class

function Card () {
  return (
    <div className="card">
      <h1 className="card-title"> Title </h1>
      <h2> Subtitle </h2>
      <p> Description </p>
    </div>
  );
}

// so that other files can use Card
export default Card;