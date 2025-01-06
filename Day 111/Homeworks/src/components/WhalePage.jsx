import React from 'react';


function WhalePage() {
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold text-center">Big White Whale</h1>
      <p className="mt-4 text-gray-700">
        This whale is a majestic creature found in the oceans. Known for its size and power...
      </p>
      <img src="whale.jpg" alt="Big White Whale" className="mt-6 mx-auto shadow-lg rounded w-full max-w-lg" />
      <h2 className="text-2xl font-semibold mt-8">Characteristics</h2>
      <ul className="list-disc list-inside mt-4 text-gray-600">
        <li>Huge Size</li>
        <li>Lives in deep oceans</li>
        <li>Powerful</li>
      </ul>
    </div>
  );
}

export default WhalePage;
