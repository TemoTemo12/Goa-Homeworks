import React from "react";

export default function Mern() {
  return (
    <div className="max-w-4xl mx-auto p-8">
      <h2 className="text-3xl font-bold text-center text-secondary mb-6">MERN Stack Development</h2>
      <p className="text-lg text-gray-200 leading-relaxed">
        MERN (MongoDB, Express.js, React, Node.js) is a fullstack JavaScript framework for building
        modern web applications. Dive in and get your hands dirty with these powerful tools!
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-secondary">MongoDB</h3>
          <p className="text-gray-300 mt-2">
            A NoSQL database that works seamlessly with Node.js to store application data.
          </p>
        </div>
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
          <h3 className="text-xl font-semibold text-secondary">React</h3>
          <p className="text-gray-300 mt-2">
            A powerful JavaScript library for building modern, reactive UIs.
          </p>
        </div>
      </div>
    </div>
  );
}
