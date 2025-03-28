import React from 'react';

const SamsungApp = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f8f9fa' }}>
      <h1 style={{ color: '#000' }}>Samsung App</h1>
      <p>Welcome to the official Samsung app experience.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <h2>Latest Products</h2>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://via.placeholder.com/300x200.png?text=Samsung+Galaxy+Phone"
            alt="Samsung Galaxy"
            style={{ width: '300px', height: '200px', objectFit: 'cover' }}
          />
          <p>Samsung Galaxy Series</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://via.placeholder.com/300x200.png?text=Samsung+Smartwatch"
            alt="Samsung Smartwatch"
            style={{ width: '300px', height: '200px', objectFit: 'cover' }}
          />
          <p>Samsung Smartwatch</p>
        </div>
      </div>
      <button
        style={{
          backgroundColor: '#0091ea',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          marginTop: '30px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        onClick={() => alert('Samsung app downloaded!')}
      >
        Download Samsung App
      </button>
    </div>
  );
};

export default SamsungApp;
