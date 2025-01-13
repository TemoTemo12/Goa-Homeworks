import React from "react";

const Buttons = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-screen bg-gray-100">
      {/* Hover Button */}
      <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-all duration-300">
        Hover Button
      </button>

      {/* Focus Button */}
      <button className="px-6 py-3 bg-green-600 text-white font-semibold rounded-md focus:outline-none focus:ring-4 focus:ring-green-300 transition-all duration-300">
        Focus Button
      </button>

      {/* Active Button */}
      <button className="px-6 py-3 bg-red-600 text-white font-semibold rounded-md active:bg-red-800 transition-all duration-300">
        Active Button
      </button>
    </div>
  );
};

export default Buttons;
