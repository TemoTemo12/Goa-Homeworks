import React from 'react';

const AppleApp = () => {
  return (
    <div style={{ textAlign: 'center', padding: '20px', backgroundColor: '#f0f0f5' }}>
      <h1 style={{ color: '#333' }}>Apple App</h1>
      <p>Experience the best of Apple technology in one app.</p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '30px' }}>
        <h2>Featured Devices</h2>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://via.placeholder.com/300x200.png?text=Apple+iPhone"
            alt="iPhone"
            style={{ width: '300px', height: '200px', objectFit: 'cover' }}
          />
          <p>iPhone 13 Pro</p>
        </div>
        <div style={{ textAlign: 'center' }}>
          <img
            src="https://via.placeholder.com/300x200.png?text=MacBook+Air"
            alt="MacBook Air"
            style={{ width: '300px', height: '200px', objectFit: 'cover' }}
          />
          <p>MacBook Air</p>
        </div>
      </div>
      <button
        style={{
          backgroundColor: '#1d1d1f',
          color: 'white',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          marginTop: '30px',
          cursor: 'pointer',
          fontSize: '16px',
        }}
        onClick={() => alert('Apple app downloaded!')}
      >
        Download Apple App
      </button>
    </div>
  );
};

export default AppleApp;
