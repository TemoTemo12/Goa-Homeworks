import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white p-4 flex flex-wrap justify-between items-center shadow-lg sticky top-0 z-50">
      <div className="text-xl font-bold">All-In-One</div>
      <div className="flex space-x-4">
        <Link to="/" className="hover:text-blue-400">Home</Link>
        <Link to="/about" className="hover:text-blue-400">About</Link>
        <Link to="/contacts" className="hover:text-blue-400">Contacts</Link>
        <Link to="/flying-fish-facts" className="hover:text-blue-400">Flying Fish</Link>
        <Link to="/login" className="hover:text-blue-400">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
