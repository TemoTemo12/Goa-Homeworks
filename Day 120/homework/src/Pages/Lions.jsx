import React from 'react';
import { Link } from 'react-router-dom';

const Lions = () => {
  const lions = [
    { id: '1', name: 'African Lion', description: 'The African lion is the most common lion species found in Africa.' },
    { id: '2', name: 'Asiatic Lion', description: 'The Asiatic lion is native to the Gir Forest in India.' },
    { id: '3', name: 'Mountain Lion', description: 'The mountain lion is also known as a cougar or puma, found in the Americas.' },
  ];

  return (
    <div>
      <h1>Lions</h1>
      <ul className="lions-list">
        {lions.map(lion => (
          <li key={lion.id}>
            <Link to={`/lions/${lion.id}`}>{lion.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Lions;
