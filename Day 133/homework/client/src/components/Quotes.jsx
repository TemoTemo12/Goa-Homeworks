import React, { useState, useEffect } from 'react';

function Quotes() {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    fetch('/api/quotes')
      .then(res => res.json())
      .then(data => setQuote(data.quote));
  }, []);

  return (
    <div className="m-4 p-4 bg-gray-800 rounded-md text-white">
      <h2 className="text-xl font-semibold">Random Quote</h2>
      <p className="text-lg">{quote}</p>
    </div>
  );
}

export default Quotes;
