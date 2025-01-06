import React from 'react';

const Conservation = () => {
  return (
    <section id="conservation" className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-semibold text-sea-blue">Conservation Efforts</h2>
        <p className="mt-6 text-lg text-dark-gray">
          While sea lions are not currently endangered, conservation efforts are necessary to protect their populations from habitat loss, pollution, and overfishing.
        </p>
        <button className="mt-6 px-6 py-2 bg-sea-green text-white font-semibold rounded-lg hover:bg-sea-blue transition duration-300">
          Learn More
        </button>
      </div>
    </section>
  );
};

export default Conservation;
