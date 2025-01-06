import React from 'react';

const Contacts = () => {
  return (
    <section id="contacts" className="p-6 max-w-lg mx-auto bg-white shadow-md rounded">
      <h2 className="text-2xl font-bold mb-4">კონტაქტები</h2>
      <form>
        <label className="block mb-2" htmlFor="name">სახელი:</label>
        <input className="border p-2 w-full mb-4" type="text" id="name" name="name" required />
        <label className="block mb-2" htmlFor="email">ელ. ფოსტა:</label>
        <input className="border p-2 w-full mb-4" type="email" id="email" name="email" required />
        <button className="bg-blue-500 text-white px-4 py-2 rounded" type="submit">გაგზავნა</button>
      </form>
    </section>
  );
};

export default Contacts;
