// QrCodeComponent.js
import React from 'react';

const QrCodeComponent = () => {
  return (
    <div className="max-w-xs mx-auto bg-white rounded-2xl shadow-lg p-6 text-center">
      <img
        className="rounded-xl"
        src="/images/qr-code.png" // Replace with your QR code image path
        alt="QR Code"
      />
      <h2 className="mt-6 font-bold text-xl text-gray-800">
        Improve your front-end skills by building projects
      </h2>
      <p className="mt-4 text-gray-600">
        Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
      </p>
    </div>
  );
};

export default QrCodeComponent;
