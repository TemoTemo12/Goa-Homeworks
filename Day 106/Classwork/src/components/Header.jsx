// src/components/Header/Header.jsx
import React from 'react';
import { navigationLinks } from '../../constants/index';
import './Header.css';

function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav>
        <ul className="flex justify-center space-x-6">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <a href={link.path} className="hover:text-yellow-400">
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
