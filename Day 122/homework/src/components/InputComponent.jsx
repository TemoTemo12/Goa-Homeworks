import React from 'react';

const InputComponent = () => (
  <div className="p-6 bg-gray-900 rounded-md">
    <label className="block mb-2 text-sm font-medium text-white">Username</label>
    <input
      type="text"
      className="w-full p-2 rounded-md bg-gray-800 text-white"
      placeholder="Enter your username"
    />
  </div>
);

export default InputComponent;
