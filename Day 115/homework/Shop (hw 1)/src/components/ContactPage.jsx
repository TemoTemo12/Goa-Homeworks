import React from 'react';

function ContactPage() {
  return (
    <div className="p-4 border rounded shadow-lg">
      <h2 className="text-3xl font-bold mb-4">კონტაქტი</h2>
      <form className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="სახელი"
          className="p-2 border rounded"
        />
        <input
          type="email"
          placeholder="ელ. ფოსტა"
          className="p-2 border rounded"
        />
        <textarea
          placeholder="შეიყვანეთ თქვენი შეტყობინება"
          className="p-2 border rounded"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          გაგზავნა
        </button>
      </form>
    </div>
  );
}

export default ContactPage;
