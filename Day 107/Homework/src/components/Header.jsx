import React from 'react';

const Header = () => {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="flex justify-center">
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:underline">Hero</a></li>
          <li><a href="#contacts" className="hover:underline">Contacts</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
