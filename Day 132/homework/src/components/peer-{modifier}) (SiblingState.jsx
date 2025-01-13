import React from "react";

const SiblingState = () => {
  return (
    <div className="flex flex-col items-start gap-2">
      <input
        type="checkbox"
        id="toggle"
        className="peer hidden"
      />
      <label
        htmlFor="toggle"
        className="bg-gray-300 text-black py-2 px-4 rounded cursor-pointer peer-checked:bg-green-500"
      >
        Check Me
      </label>
      <span className="text-gray-700 peer-checked:text-green-700">
        Checkbox is checked!
      </span>
    </div>
  );
};

export default SiblingState;
