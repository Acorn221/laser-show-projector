import React, { useContext, useState } from 'react';
import ArrowAdjustment from '@/components/ArrowAdjustment';
import { Settings } from '@/App';
import KeystoneCorrectionVisualisation from './KeystoneCorrectionVisualisation';

const KeystoneCorrection = () => {
  const settings = useContext(Settings);
  const [enable, setEnable] = useState(settings.currentSettings.keystoneCorrection.enable);
  const [keystone, setKeystone] = useState(settings.currentSettings.keystoneCorrection.state);

  const toggleKeystoneCorrection = () => {
    settings.updateSettings({
      updateSettings: settings.updateSettings,
      currentSettings: {
        ...settings.currentSettings,
        keystoneCorrection: {
          ...settings.currentSettings.keystoneCorrection,
          enable: !enable,
        },
      },
    });
    setEnable(!enable);
  };

  return (
    <div className="bg-gray-300 mt-4 mb-4 p-3 ">
      <div className="text-2xl">Keystone Correction</div>
      <hr className="bg-black h-1 rounded-full mt-3 mb-3" />
      <div className="flex flex-row">
        <div className="flex flex-col">
          <div className="text-xl">Enable Keystone Correction</div>
          <div className="text-sm">Enable keystone correction to compensate for the distortion of the laser beam.</div>
        </div>
        <div className="flex flex-col">
          <input type="checkbox" checked={enable} onChange={() => toggleKeystoneCorrection()} />
        </div>
      </div>
      <ArrowAdjustment value={{ xOffset: 0, yOffset: 0 }} onChange={(x) => { setKeystone(x); }} />
      <KeystoneCorrectionVisualisation state={{ enabled: true, points: { x: keystone.xOffset, y: keystone.yOffset } }} />
    </div>
  );
};

export default KeystoneCorrection;
