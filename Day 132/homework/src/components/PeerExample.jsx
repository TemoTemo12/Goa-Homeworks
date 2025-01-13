import React from "react";

const PeerExample = () => {
  return (
    <div className="peer-container flex items-center gap-4">
      <input type="text" className="peer border px-4 py-2" placeholder="Focus here" />
      <span className="peer-focus:text-blue-500">I change when input is focused!</span>
    </div>
  );
};

export default PeerExample;
