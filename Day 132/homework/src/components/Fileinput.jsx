import React from "react";

const FileInput = () => {
  return (
    <div className="p-4">
      <input
        type="file"
        className="file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:bg-blue-500 file:text-white file:cursor-pointer hover:file:bg-blue-700"
      />
    </div>
  );
};

export default FileInput;
