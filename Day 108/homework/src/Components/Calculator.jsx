import React, { useState } from 'react';

const arrMathOperators = ['+', '-', '*', '/'];

const Calculator = () => {
  const [result, setResult] = useState('');

  const handleOperation = (operator) => {
    const currentValue = parseFloat(result);
    const nextValue = parseFloat(prompt(`Enter number for ${operator}:`));

    switch (operator) {
      case '+':
        setResult(currentValue + nextValue);
        break;
      case '-':
        setResult(currentValue - nextValue);
        break;
      case '*':
        setResult(currentValue * nextValue);
        break;
      case '/':
        setResult(currentValue / nextValue);
        break;
      default:
        break;
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-xl mb-4">Calculator</h2>
      <div className="mb-4">
        <input
          type="text"
          value={result}
          readOnly
          className="border p-2 w-full"
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {arrMathOperators.map((operator) => (
          <button
            key={operator}
            onClick={() => handleOperation(operator)}
            className="bg-blue-500 text-white p-2 rounded"
          >
            {operator}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calculator;
