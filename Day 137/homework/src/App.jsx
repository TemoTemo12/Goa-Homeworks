// src/App.js
import React, { useState } from 'react';

const products = [
  { id: 1, name: 'Samsung Galaxy S21', price: 799, image: 'https://via.placeholder.com/150' },
  { id: 2, name: 'iPhone 13', price: 999, image: 'https://via.placeholder.com/150' },
  { id: 3, name: 'Google Pixel 6', price: 599, image: 'https://via.placeholder.com/150' },
  { id: 4, name: 'OnePlus 9', price: 729, image: 'https://via.placeholder.com/150' },
];

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter(product => product.id !== productId));
  };

  return (
    <div className="font-sans bg-gray-100 min-h-screen p-6">
      <header className="text-center text-3xl mb-6">
        <h1>Phone Shop</h1>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div key={product.id} className="bg-white p-4 rounded-lg shadow-lg">
            <img className="w-full h-40 object-cover rounded-md" src={product.image} alt={product.name} />
            <h2 className="text-xl mt-2">{product.name}</h2>
            <p className="text-lg font-semibold text-green-500">${product.price}</p>
            <button 
              onClick={() => addToCart(product)}
              className="mt-4 w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6">
        <h2 className="text-2xl mb-4">Shopping Cart</h2>
        <div className="bg-white p-4 rounded-lg shadow-lg">
          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <ul>
              {cart.map((product, index) => (
                <li key={index} className="flex justify-between items-center mb-4">
                  <span>{product.name} - ${product.price}</span>
                  <button 
                    onClick={() => removeFromCart(product.id)}
                    className="text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
