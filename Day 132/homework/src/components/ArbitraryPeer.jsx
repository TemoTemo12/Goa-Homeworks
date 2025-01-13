import React from "react";

const ArbitraryPeer = () => {
  return (
    <div className="peer-container">
      <input
        type="checkbox"
        id="arbitraryPeer"
        className="peer hidden"
      />
      <label
        htmlFor="arbitraryPeer"
        className="[&:checked~span]:text-red-500 bg-gray-200 px-4 py-2 rounded"
      >
        Check Me
      </label>
      <span className="text-gray-600">Text changes if checkbox is checked</span>
    </div>
  );
};

export default ArbitraryPeer;
