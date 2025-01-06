import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold">MyWebsite</h1>
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          &#9776;
        </button>
        <ul
          className={`md:flex md:space-x-6 ${isOpen ? 'block' : 'hidden'} md:block`}
        >
          <li><a href="#" className="block py-2 px-4">Home</a></li>
          <li><a href="#" className="block py-2 px-4">About</a></li>
          <li><a href="#" className="block py-2 px-4">Services</a></li>
          <li><a href="#" className="block py-2 px-4">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
