import React from "react";

const ShippingDetails = () => (
  <div className="min-h-screen flex items-center justify-center bg-black p-6">
    <div className="p-8 rounded-lg shadow-xl bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
      <h2 className="text-2xl font-bold text-white mb-6">Shipping Details</h2>

      {/* Street Address */}
      <label className="block mb-2 text-sm text-cyan-400">Street Address</label>
      <input
        type="text"
        placeholder="123 Main Street"
        className="w-full p-3 mb-6 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-cyan-500 hover:shadow-cyan transition duration-300"
      />

      {/* Country */}
      <label className="block mb-2 text-sm text-pink-400">Country</label>
      <select
        className="w-full p-3 rounded-md bg-gray-800 text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-pink-500 hover:shadow-pink transition duration-300"
      >
        <option>Canada</option>
        <option>USA</option>
        <option>Mexico</option>
      </select>
    </div>
  </div>
);

export default ShippingDetails;
