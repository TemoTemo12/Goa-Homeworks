import React, { useState } from 'react';
import { RadioGroup } from '@headlessui/react';

const plans = ['Startup', 'Business', 'Enterprise'];

const FieldsetComponent = () => {
  const [selected, setSelected] = useState(plans[0]);

  return (
    <RadioGroup value={selected} onChange={setSelected} className="space-y-2">
      {plans.map((plan) => (
        <RadioGroup.Option
          key={plan}
          value={plan}
          className={({ checked }) =>
            `p-2 rounded-md ${
              checked ? 'bg-gray-800 text-white' : 'bg-gray-700 text-gray-300'
            }`
          }
        >
          {plan}
        </RadioGroup.Option>
      ))}
    </RadioGroup>
  );
};

export default FieldsetComponent;
