import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-sea-blue py-8">
      <div className="text-center text-white">
        <p>&copy; 2024 Sea Lions Project. All rights reserved.</p>
        <div className="mt-4">
          <a href="https://facebook.com" className="text-white hover:text-gold mx-4">Facebook</a>
          <a href="https://instagram.com" className="text-white hover:text-gold mx-4">Instagram</a>
          <a href="https://twitter.com" className="text-white hover:text-gold mx-4">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
