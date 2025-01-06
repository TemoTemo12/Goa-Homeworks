import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-4">
      <p>© 2024 თქვენი კომპანია. ყველა უფლება დაცულია.</p>
      <ul className="flex justify-center space-x-4">
        <li><a href="#" className="hover:underline">Facebook</a></li>
        <li><a href="#" className="hover:underline">Instagram</a></li>
        <li><a href="#" className="hover:underline">Twitter</a></li>
      </ul>
    </footer>
  );
};

export default Footer;
