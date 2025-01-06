import React from 'react';
import Calculator from './Components./Calculator';
import ColorBoxes from './Components./ColorBoxes';

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <Calculator />
      <ColorBoxes />
    </div>
  );
};

export default App;
