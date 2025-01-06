import React, { useState } from 'react';
import { Listbox } from '@headlessui/react';

const people = ['John', 'George', 'Paul', 'Ringo'];

const ListboxComponent = () => {
  const [selected, setSelected] = useState(people[0]);

  return (
    <div className="w-64">
      <Listbox value={selected} onChange={setSelected}>
        <Listbox.Button className="w-full p-2 bg-gray-800 text-white rounded-md">
          {selected}
        </Listbox.Button>
        <Listbox.Options className="bg-gray-700 mt-2 rounded-md text-white">
          {people.map((person, index) => (
            <Listbox.Option
              key={index}
              value={person}
              className="cursor-pointer p-2 hover:bg-gray-600"
            >
              {person}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </Listbox>
    </div>
  );
};

export default ListboxComponent;
