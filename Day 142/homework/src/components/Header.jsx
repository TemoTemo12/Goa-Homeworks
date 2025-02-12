import React from 'react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-white bg-opacity-80 backdrop-blur-lg shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <span className="text-2xl font-bold text-blue-600">MyLogo</span>
          </div>
          <nav className="flex items-center space-x-8">
            {["home", "about", "services", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                className="text-gray-700 hover:text-blue-600 transition duration-300 capitalize"
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;