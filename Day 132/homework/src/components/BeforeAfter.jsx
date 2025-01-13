import React from "react";

const BeforeAfter = () => {
  return (
    <div className="relative p-4">
      <div className="before:content-['Before'] after:content-['After'] before:absolute after:absolute before:-top-6 after:-bottom-6 before:text-blue-500 after:text-red-500">
        Hover to see "Before" and "After"
      </div>
    </div>
  );
};

export default BeforeAfter;
