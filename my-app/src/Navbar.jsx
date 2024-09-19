import React from 'react';
import { Link } from 'react-router-dom';
import './Navbarcss.css'; // Import the CSS file

export default function Navbar() {
  return (
    <div className="navbar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to='/about'>About</Link></li>
        <li><Link to='/contact'>Contact</Link></li>
      </ul>
    </div>
  );
}
