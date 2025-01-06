import React, { useState } from 'react';
import { Switch } from '@headlessui/react';

const SwitchComponent = () => {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch
      checked={enabled}
      onChange={setEnabled}
      className={`${enabled ? 'bg-green-500' : 'bg-gray-800'}
        relative inline-flex items-center h-6 rounded-full w-11`}
    >
      <span
        className={`${
          enabled ? 'translate-x-6' : 'translate-x-1'
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
  );
};

export default SwitchComponent;
