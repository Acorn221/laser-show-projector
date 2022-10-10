import React from 'react';
import { XyzTransitionGroup } from '@animxyz/react';

import '@/index.css';

const App = () => {
  const [count, setCount] = React.useState(0);
  const [showCount, setShowCount] = React.useState(true);

  const increment = () => {
    setShowCount(false);
    setTimeout(() => {
      requestAnimationFrame(() => {
        setShowCount(true);
        setCount(count + 1);
      });
    }, 150);
  };

  return (
    <div className="flex justify-center align-middle h-screen">
      <div className="bg-white m-auto p-10 rounded-xl w-3/4 md:w-1/2 text-center">
        <div className="underline text-5xl">Hello World</div>
        <div className="flex justify-center m-5">
          <button className="text-2xl m-auto w-full bg-slate-200 hover:bg-slate-300 p-5 rounded-2xl flex" onClick={() => increment()}>
            <div className="flex-initial">
              Click Count:
            </div>
            <XyzTransitionGroup xyz="fade down-100% back-2" duration={150} className="flex-1">
              {showCount && (
              <div>
                {count}
              </div>
              )}
            </XyzTransitionGroup>
          </button>
        </div>
        <div className="m-5 text-left">
          <div className="underline text-2xl mb-3">
            This Template Uses:
          </div>
          <ul>
            <li>○ Yarn</li>
            <li>○ Typescript</li>
            <li>○ React</li>
            <li>○ Tailwind</li>
            <li>○ Absolute Paths (@/components/MyComponent)</li>
            <li>○ Vite</li>
            <li>○ Github Pages, For Easy Deployment</li>
            <li>○ Eslint</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default App;
