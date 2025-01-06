import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="h-screen bg-[url('./hero-image.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-white text-center">
      <h1 className="text-5xl font-bold">კეთილი იყოს თქვენი მობრძანება!</h1>
      <p className="mt-4">ეს არის ჩვენი ლამაზი ვებსაიტი.</p>
    </section>
  );
};

export default Hero;
