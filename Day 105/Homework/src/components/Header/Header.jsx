// src/components/Header/Header.jsx
import React from 'react';
import { navigationLinks } from '../../constants/index';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav>
        <ul className="nav-list">
          {navigationLinks.map((link) => (
            <li key={link.id}>
              <a href={link.path}>{link.name}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
