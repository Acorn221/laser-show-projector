import React, { useState, createContext, useEffect } from 'react';
import KeystoneCorrection from '@/components/Keystone/KeystoneCorrection';
import '@/index.css';
import LaserPower from '@/components/LaserPower';
import PongControls from '@/components/PongControls';

const defaultSettings = {
  keystoneCorrection: {
    enable: false,
    state: {
      xOffset: 0,
      yOffset: 0,
    },
  },
  lasers: {
    blue: {
      enable: true,
      power: 100,
    },
    green: {
      enable: true,
      power: 100,
    },
  },
};

export const Settings = createContext({ currentSettings: defaultSettings, updateSettings: (settings: any) => {} });

const App = () => {
  const [showSection, setShowSection] = useState(0);
  const [settings, setSettings] = useState({ currentSettings: defaultSettings, updateSettings: (x: any) => {} });

  const updateSettings = (newSettings: any) => {
    setSettings({ currentSettings: newSettings, updateSettings });
  };

  useEffect(() => {
    updateSettings(defaultSettings);
  }, []);

  const toggleSelection = (selection: number) => {
    setShowSection(selection === showSection ? 0 : selection);
  };

  return (
    <div className="flex justify-center align-middle h-screen">
      <div className="bg-gray-200 p-4 rounded-lg m-auto">
        <div className="text-5xl">Laser Controls</div>
        <hr className="bg-black h-1 rounded-full mt-3 mb-3" />
        <div className="grid gap-2 grid-cols-2">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => toggleSelection(1)}>
            Keystone Correction
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => toggleSelection(2)}>
            Laser Power and Colours
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => toggleSelection(3)}>
            Pong Controls
          </button>
        </div>

        <Settings.Provider value={settings}>
          {showSection === 1 && (
            <KeystoneCorrection />
          )}
          {showSection === 2 && (
            <LaserPower />
          )}
          {showSection === 3 && (
            <PongControls />
          )}
        </Settings.Provider>
      </div>
    </div>
  );
};

export default App;
