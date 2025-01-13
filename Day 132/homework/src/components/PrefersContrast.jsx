import React from "react";

const PrefersContrast = () => {
  return (
    <div className="p-4">
      <div className="bg-gray-200 p-4 high-contrast:bg-gray-800 high-contrast:text-white">
        This block changes based on contrast preference.
      </div>
    </div>
  );
};

export default PrefersContrast;
