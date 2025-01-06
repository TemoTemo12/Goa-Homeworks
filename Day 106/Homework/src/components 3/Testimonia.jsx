// src/components/Testimonial.jsx
import React from 'react';

function Testimonial({ text, name, img }) {
  return (
    <div className="border rounded-lg p-6 bg-white shadow-lg">
      <p className="text-gray-700 mb-4">"{text}"</p>
      <div className="flex items-center">
        <img src={img} alt={name} className="rounded-full w-12 h-12 mr-3" />
        <div>
          <h3 className="font-bold">{name}</h3>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
