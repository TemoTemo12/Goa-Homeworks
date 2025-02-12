import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center text-center">
      {/* Background Image */}
      <img 
        src="https://source.unsplash.com/random/1600x900?landscape" 
        alt="Scenic Background" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900 via-transparent to-blue-900 opacity-75"></div>
      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 drop-shadow-lg">
          Welcome to Our Website
        </h1>
        <p className="text-xl md:text-2xl text-gray-100 mb-8 drop-shadow-lg">
          Experience innovative design and seamless performance.
        </p>
        <a 
          href="#about" 
          className="inline-block bg-blue-600 hover:bg-blue-700 transition duration-300 text-white px-8 py-4 rounded-full text-lg font-semibold shadow-lg"
        >
          Learn More
        </a>
      </div>
    </section>
  );
};

export default Hero;