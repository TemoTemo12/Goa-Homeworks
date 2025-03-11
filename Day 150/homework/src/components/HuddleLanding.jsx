// HuddleLanding.js
import React from 'react';

const HuddleLanding = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/huddle-bg.jpg')" }} // Replace with your background image path
    >
      <div className="bg-white bg-opacity-80 p-10 rounded-xl text-center max-w-md mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Huddle</h1>
        <p className="text-gray-700 mb-6">
          Building communities has never been easier. Join us today and start connecting.
        </p>
        <form className="flex flex-col space-y-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded hover:bg-blue-600"
          >
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default HuddleLanding;
