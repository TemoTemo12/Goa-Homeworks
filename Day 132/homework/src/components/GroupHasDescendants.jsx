import React from "react";

const GroupHasDescendants = () => {
  return (
    <div className="group p-4 border group-has:focus-within:bg-yellow-200">
      <input
        type="text"
        className="border px-2 py-1"
        placeholder="Focus to change parent background"
      />
    </div>
  );
};

export default GroupHasDescendants;
