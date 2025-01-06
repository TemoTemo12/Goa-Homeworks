// src/components/Services/Services.jsx
import React from 'react';

function Services() {
  return (
    <section className="py-20 bg-white">
      <h2 className="text-center text-3xl font-semibold">ჩვენი სერვისები</h2>
      <ul className="mt-4 flex justify-center space-x-6">
        <li className="p-4 border rounded shadow hover:bg-gray-100">სერვისი 1</li>
        <li className="p-4 border rounded shadow hover:bg-gray-100">სერვისი 2</li>
        <li className="p-4 border rounded shadow hover:bg-gray-100">სერვისი 3</li>
      </ul>
    </section>
  );
}

export default Services;
