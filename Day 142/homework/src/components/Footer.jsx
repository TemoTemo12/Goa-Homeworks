import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-800 py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <p className="text-gray-400">Get in touch with us on social media.</p>
        <div className="flex justify-center space-x-6 mt-4">
          {/* Example social icons; replace SVG paths with your preferred icons */}
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22,12A10,10 0 1,0 12,22A10,10 0 0,0 22,12Z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22,12A10,10 0 1,0 12,22A10,10 0 0,0 22,12Z" />
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M22,12A10,10 0 1,0 12,22A10,10 0 0,0 22,12Z" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-gray-500">
          &copy; {new Date().getFullYear()} My Company. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;