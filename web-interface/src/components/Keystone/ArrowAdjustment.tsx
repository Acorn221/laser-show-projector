import React, {
  useState, useCallback, useEffect, useContext,
} from 'react';
import {
  BsFillArrowUpCircleFill,
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
  BsFillArrowDownCircleFill,
} from 'react-icons/bs';

import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { Settings } from '@/App';

export interface ArrowStateInterface {
	xOffset: number;
	yOffset: number;
  step?: number;
}

const iconClassName = 'w-8 h-8 hover:invert-[20%] m-auto';

const stepsString = [0.05, 0.1, 1, 10].map((x) => x.toString());

const ArrowAdjustment = () => {
  const context = useContext(Settings);
  const [state, setState] = useState(context.currentSettings.keystoneCorrection.state);
  const [step, setStep] = useState('0.1');

  const buttonPress = (button: string) => {
    const stepFloat = parseFloat(step);
    switch (button) {
      case 'up':
        setState({ ...state, yOffset: state.yOffset + stepFloat });
        break;
      case 'down':
        setState({ ...state, yOffset: state.yOffset - stepFloat });
        break;
      case 'left':
        setState({ ...state, xOffset: state.xOffset - stepFloat });
        break;
      case 'right':
        setState({ ...state, xOffset: state.xOffset + stepFloat });
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    context.updateSettings({
      ...context.currentSettings,
      keystoneCorrection: { ...context.currentSettings.keystoneCorrection, state },
    });
  }, [state]);

  return (
    <div className="m-5 h-32 w-44 grid grid-cols-3 gap-2">
      <button className="col-span-3 flex rounded-full" onClick={() => buttonPress('up')}>
        <BsFillArrowUpCircleFill className={iconClassName} />
      </button>
      <button className="flex" onClick={() => buttonPress('left')}>
        <BsFillArrowLeftCircleFill className={iconClassName} />
      </button>
      <Dropdown options={stepsString} onChange={(x) => setStep(x.value)} value={step} placeholder="Step" />
      <button className="flex" onClick={() => buttonPress('right')}>
        <BsFillArrowRightCircleFill className={iconClassName} />
      </button>
      <button className="col-span-3 flex" onClick={() => buttonPress('down')}>
        <BsFillArrowDownCircleFill className={iconClassName} />
      </button>
    </div>
  );
};

export default ArrowAdjustment;
