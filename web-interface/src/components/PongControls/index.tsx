/* eslint-disable jsx-a11y/control-has-associated-label */
import { useState } from 'react';
import { BsFillArrowUpSquareFill, BsFillArrowDownSquareFill } from 'react-icons/bs';

const PongControls = () => {
	// TODO: setup the websocket properly in the context
  const ws = new WebSocket('ws://127.0.0.1:8080');
  const [id, setId] = useState('');
  const sendMove = (dir: number) => {
    ws.send(JSON.stringify({ id, dir }));
  };
  return (
    <div className="m-5">
      <div className="flex flex-col justify-center align-middle h-screen">
        <button onClick={() => sendMove(1)}><BsFillArrowUpSquareFill className="w-1/2 h-full m-auto mb-3" /></button>
        <button onClick={() => sendMove(0)}><BsFillArrowDownSquareFill className="w-1/2 h-full m-auto mt-3" /></button>
      </div>
    </div>
  );
};

export default PongControls;
