import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/teams">Teams</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/lions">Lions</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
