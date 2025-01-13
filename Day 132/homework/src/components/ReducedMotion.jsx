import React from "react";

const ReducedMotion = () => {
  return (
    <div className="p-4">
      <button className="transition duration-300 hover:scale-110 motion-reduce:transition-none motion-reduce:hover:scale-100 bg-blue-500 text-white py-2 px-4 rounded">
        Hover Me
      </button>
    </div>
  );
};

export default ReducedMotion;
