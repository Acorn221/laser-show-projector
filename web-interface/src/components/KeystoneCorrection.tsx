import React, { useContext, useState } from 'react';
import ArrowAdjustment from '@/components/ArrowAdjustment';
import { Settings } from '@/App';
import KeystoneCorrectionVisualisation from './KeystoneCorrectionVisualisation';

const KeystoneCorrection = () => {
  const settings = useContext(Settings);
  const [keystone, setKeystone] = useState(settings.currentSettings.keystoneCorrection);

  const syncToSettings = () => {
    settings.updateSettings({
      ...settings.currentSettings,
      keystoneCorrection: keystone,
    });
  };

  const toggleKeystoneCorrection = () => {
    setKeystone({
      ...keystone,
      enable: !keystone.enable,
    });
    syncToSettings();
  };

  return (
    <div className="bg-gray-300 mt-4 mb-4 p-3 ">
      <div className="text-2xl">Keystone Correction</div>
      <hr className="bg-black h-1 rounded-full mt-3 mb-3" />
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="text-xl">Enable Keystone Correction</div>
          <div className="text-sm">Enable keystone correction to compensate for the distortion of the laser's shape on the wall.</div>
        </div>
        <div className="flex flex-col">
          <input type="checkbox" checked={keystone.enable} onChange={() => toggleKeystoneCorrection()} />
        </div>
      </div>
      <ArrowAdjustment />
      <KeystoneCorrectionVisualisation />
    </div>
  );
};

export default KeystoneCorrection;
