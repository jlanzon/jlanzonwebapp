import React from 'react';
import LightDarkSwitch from '../components/LightDarkSwitch';

const Settings: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl mb-8">Settings</h1>
      <div className="card bordered p-4 mb-8">
        <h2 className="text-2xl mb-4">Appearance</h2>
        <LightDarkSwitch />
      </div>
    </div>
  );
};

export default Settings;
