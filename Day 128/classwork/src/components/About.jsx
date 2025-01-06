import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 px-4 bg-cover bg-center" style={{ backgroundImage: 'url("https://example.com/sea-lion.jpg")' }}>
      <div className="max-w-4xl mx-auto text-center bg-black bg-opacity-50 p-8 rounded-lg">
        <h2 className="text-4xl font-semibold text-white">What are Sea Lions?</h2>
        <p className="mt-6 text-lg text-light-gray">
          Sea lions are a type of pinniped known for their external ear flaps and ability to "walk" on land using their front flippers. They are playful and social animals, often found in coastal areas.
        </p>
      </div>
    </section>
  );
};

export default About;
