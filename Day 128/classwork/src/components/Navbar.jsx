import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-2xl font-bold">Sea Lions</a>
        <ul className="flex space-x-6">
          <li><a href="#about" className="text-white hover:text-yellow-400">About</a></li>
          <li><a href="#habitat" className="text-white hover:text-yellow-400">Habitat</a></li>
          <li><a href="#conservation" className="text-white hover:text-yellow-400">Conservation</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
