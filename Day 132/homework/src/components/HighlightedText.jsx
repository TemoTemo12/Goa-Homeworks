import React from "react";

const HighlightedText = () => {
  return (
    <div className="p-4">
      <p>
        This is an <mark className="bg-yellow-300">important</mark> highlight.
      </p>
    </div>
  );
};

export default HighlightedText;
