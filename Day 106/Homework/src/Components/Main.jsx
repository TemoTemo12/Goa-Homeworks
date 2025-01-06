// src/components/Main.jsx
import React from 'react';

const items = [
  {
    id: 1,
    info: 'ეს არის პირველი ინფორმაცია',
    img: 'https://via.placeholder.com/150',
    heading: 'პირველი სათაური',
    subHeading: 'პირველი ქვესათაური',
  },
  {
    id: 2,
    info: 'ეს არის მეორე ინფორმაცია',
    img: 'https://via.placeholder.com/150',
    heading: 'მეორე სათაური',
    subHeading: 'მეორე ქვესათაური',
  },
  {
    id: 3,
    info: 'ეს არის მესამე ინფორმაცია',
    img: 'https://via.placeholder.com/150',
    heading: 'მესამე სათაური',
    subHeading: 'მესამე ქვესათაური',
  },
];

function Main() {
  return (
    <main className="flex flex-col items-center mt-4">
      {items.map((item) => (
        <div key={item.id} className="border p-4 rounded-lg shadow-lg mb-4 w-80">
          <p>{item.info}</p>
          <img src={item.img} alt={item.heading} className="my-2 rounded" />
          <h3 className="text-xl font-bold">{item.heading}</h3>
          <h4 className="text-lg text-gray-600">{item.subHeading}</h4>
        </div>
      ))}
    </main>
  );
}

export default Main;
