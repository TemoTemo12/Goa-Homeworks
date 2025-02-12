import React from 'react';

const Services = () => {
  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">Our Services</h2>
          <p className="mt-4 text-lg text-gray-600">
            We offer a wide range of services to meet your digital needs.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Web Development", desc: "Responsive and modern websites tailored for you." },
            { title: "UI/UX Design", desc: "Intuitive and engaging designs that delight users." },
            { title: "SEO Optimization", desc: "Boost your online presence and search rankings." },
          ].map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-gray-200 rounded-lg shadow hover:shadow-xl transition duration-300"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-4">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;