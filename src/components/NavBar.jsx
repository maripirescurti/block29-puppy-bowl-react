import React from "react";
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div>
        <h1>Puppy Bowl</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to='/'>Home</Link></li>
        <li><Link to='/new-player'>Add Player</Link></li>
      </ul>
    </nav>
  );
};