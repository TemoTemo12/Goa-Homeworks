import React, { useState } from "react";

const DialogBackdrop = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-4">
      <button
        onClick={() => setOpen(true)}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Open Dialog
      </button>
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-md">
            <p>This is a dialog</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-4 bg-red-500 text-white py-2 px-4 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DialogBackdrop;
