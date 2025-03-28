import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/frank-sinatra">Frank Sinatra</Link></li>
        <li><Link to="/francis-ford-coppola">Francis Ford Coppola</Link></li>
        <li><Link to="/spotify">Spotify</Link></li>
        <li><Link to="/samsung">Samsung App</Link></li>
        <li><Link to="/apple">Apple</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
