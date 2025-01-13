import React from "react";

const ArbitraryGroup = () => {
  return (
    <div className="group">
      <button className="[&:hover]:bg-green-500 bg-green-300 text-white font-bold py-2 px-4 rounded">
        Hover Me (Arbitrary Group)
      </button>
    </div>
  );
};

export default ArbitraryGroup;
