import React, { useState } from 'react';

function ProductList() {
  const [products, setProducts] = useState([]);

  const addProducts = () => {
    setProducts(['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5']);
  };

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold">Product List</h1>
      <button onClick={addProducts} className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Add Products</button>
      <ul className="mt-4 list-disc list-inside">
        {products.map((product, index) => (
          <li key={index} className="text-gray-700">{product}</li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
