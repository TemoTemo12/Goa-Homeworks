import React from 'react';
import ShippingDetails from './components/ShippingDetails';
import ListboxComponent from './components/ListBoxComponents';
import FieldsetComponent from './components/FieldsetComponent';
import InputComponent from './components/InputComponent';
import SwitchComponent from './components/SwitchComponent';

const App = () => (
  <div className="min-h-screen bg-black text-white p-6 space-y-6">
    <h1 className="text-2xl font-bold">UI Components</h1>
    <ShippingDetails />
    <InputComponent />
    <ListboxComponent />
    <FieldsetComponent />
    <SwitchComponent />
  </div>
);

export default App;
