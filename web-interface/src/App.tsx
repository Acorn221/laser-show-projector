import React, { useState, createContext, useEffect } from 'react';
import KeystoneCorrection from '@/components/KeystoneCorrection';
import '@/index.css';

const defaultSettings = {
  keystoneCorrection: {
    enable: false,
    state: {
      xOffset: 0,
      yOffset: 0,
    },
  },
};

export const Settings = createContext({ currentSettings: defaultSettings, updateSettings: (settings: any) => {} });

const App = () => {
  const [showSection, setShowSection] = useState(0);
  const [settings, setSettings] = useState({ currentSettings: defaultSettings, updateSettings: (x: any) => {} });

  useEffect(() => {
    setSettings({ currentSettings: defaultSettings, updateSettings: (x: any) => setSettings(x) });
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
        </div>

        <Settings.Provider value={settings}>
          {showSection === 1 && (
            <KeystoneCorrection />
          )}
          {showSection === 2 && (
            <div className="bg-gray-300 mt-4 mb-4 p-3 ">
              <div className="text-2xl">Laser Power and Colours</div>
              <hr className="bg-black h-1 rounded-full mt-3 mb-3" />
              <div className="flex flex-row">
                hi
              </div>
            </div>
          )}
        </Settings.Provider>
      </div>
    </div>
  );
};

export default App;
