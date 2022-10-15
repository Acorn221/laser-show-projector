import { useContext } from 'react';
import { Settings } from '@/App';

const LaserPower = () => {
  const context = useContext(Settings);

  return (
    <div className="bg-gray-300 mt-4 mb-4 p-3 ">
      <div className="text-2xl">Laser Power and Colours</div>
      <hr className="bg-black h-1 rounded-full mt-3 mb-3" />
      <div className="grid grid-cols-2">
        <div className="grid grid-cols-2">
          <div className="text-xl">Enable Blue Laser</div>
          <input
            type="checkbox"
            checked={context.currentSettings.lasers.blue.enable}
            onChange={() => context.updateSettings({
              ...context.currentSettings,
              lasers: {
                ...context.currentSettings.lasers,
                blue: {
                  ...context.currentSettings.lasers.blue,
                  enable: !context.currentSettings.lasers.blue.enable,
                },
              },
            })}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="text-xl">Blue Laser Power</div>
          <input
            type="range"
            min="0"
            max="100"
            value={context.currentSettings.lasers.blue.power}
            onChange={(e) => context.updateSettings({
              ...context.currentSettings,
              lasers: {
                ...context.currentSettings.lasers,
                blue: {
                  ...context.currentSettings.lasers.blue,
                  power: e.target.value,
                },
              },
            })}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="text-xl">Enable Green Laser</div>
          <input
            type="checkbox"
            checked={context.currentSettings.lasers.green.enable}
            onChange={() => context.updateSettings({
              ...context.currentSettings,
              lasers: {
                ...context.currentSettings.lasers,
                green: {
                  ...context.currentSettings.lasers.green,
                  enable: !context.currentSettings.lasers.green.enable,
                },
              },
            })}
          />
        </div>
        <div className="grid grid-cols-2">
          <div className="text-xl">Green Laser Power</div>
          <input
            type="range"
            min="0"
            max="100"
            value={context.currentSettings.lasers.green.power}
            onChange={(e) => context.updateSettings({
              ...context.currentSettings,
              lasers: {
                ...context.currentSettings.lasers,
                green: {
                  ...context.currentSettings.lasers.green,
                  power: e.target.value,
                },
              },
            })}
          />
        </div>
      </div>
    </div>
  );
};

export default LaserPower;
