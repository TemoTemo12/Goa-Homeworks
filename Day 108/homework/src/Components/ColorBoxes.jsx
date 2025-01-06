import React from 'react';
import Box from './Box';

const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'pink'];

const ColorBoxes = () => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {colors.map((color) => (
        <Box key={color} color={color} />
      ))}
    </div>
  );
};

export default ColorBoxes;
