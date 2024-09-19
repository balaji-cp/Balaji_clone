import React from 'react';
import Navbar from './Navbar'; 
import './Homecss.css'; 

export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <h1 className="home-heading">Welcome to Home page</h1>
    </div>
  );
}
