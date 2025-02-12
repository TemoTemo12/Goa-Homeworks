import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">About Us</h2>
          <p className="mt-4 text-lg text-gray-600">
            We create modern and visually appealing websites that deliver exceptional user experiences.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Our Mission", desc: "Innovate and lead with outstanding design and performance." },
            { title: "Our Vision", desc: "Craft seamless and engaging experiences for our users." },
            { title: "Our Values", desc: "Integrity, Innovation, and Impact in everything we do." },
          ].map((item, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-lg shadow-lg transition transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{item.title}</h3>
              <p className="text-gray-600">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;