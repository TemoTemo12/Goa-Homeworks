import React from 'react';

const Box = ({ color }) => {
  return (
    <div className={`w-16 h-16 bg-${color}-500`}></div>
  );
};

export default Box;
