import React from "react";

const PlaceholderText = () => {
  return (
    <div className="p-4">
      <input
        type="text"
        placeholder="Type something here..."
        className="placeholder-gray-500 focus:placeholder-blue-500 border px-4 py-2 rounded"
      />
    </div>
  );
};

export default PlaceholderText;
