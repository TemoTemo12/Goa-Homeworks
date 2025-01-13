import React from "react";

const ForcedColors = () => {
  return (
    <div className="p-4">
      <div className="bg-gray-300 p-4 text-black forced-colors:bg-yellow-300 forced-colors:text-red-500">
        This block adapts to forced colors mode.
      </div>
    </div>
  );
};

export default ForcedColors;
