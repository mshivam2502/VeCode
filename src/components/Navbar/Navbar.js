import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <h1>VeCode</h1>
      <nav>
        <Link to="/video">Video Call</Link>
        <Link to="/chat-coding">Chat & Coding</Link>
      </nav>
    </div>
  );
}

export default Navbar;
