import React from 'react';
import './Navbar.css';

function Navbar () {
  return (
    <nav className="nav">
      <p>Gif App</p>
      <a>Home</a>
      <a>About</a>
      <a>Contact</a>
    </nav>
  );
}

export default Navbar;