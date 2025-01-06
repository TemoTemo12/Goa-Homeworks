import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4">
      <ul className="flex space-x-4 justify-center">
        <li><Link to="/" className="hover:text-gray-400">Napoleon</Link></li>
        <li><Link to="/constantinople" className="hover:text-gray-400">Constantinople</Link></li>
        <li><Link to="/erekle" className="hover:text-gray-400">Erekle II</Link></li>
        <li><Link to="/david" className="hover:text-gray-400">David IV</Link></li>
        <li><Link to="/vakhtang" className="hover:text-gray-400">Vakhtang I</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
