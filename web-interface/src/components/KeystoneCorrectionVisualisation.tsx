import Perspective from 'perspectivets';
import { useEffect, useRef } from 'react';
import PongImg from '@/Pong.jpg';

// TODO: Add 4 point keystone correction

export interface KeystoneCorrectionSettings {
	enabled: boolean;
	points: {
			x: number | {
				top: {x: number, y: number};
				right: {x: number, y: number};
			};
			y: number | {
				bottom: {x: number, y: number};
				left: {x: number, y: number};
		};
	}
}

const KeystoneCorrectionVisualisation = ({ state } : {state: KeystoneCorrectionSettings}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const draw2PointKeystone = () => {
    const img = new Image();
    img.onload = () => {
      const cnv = canvasRef.current;
      if (cnv === null) {
        console.error('Canvas not loaded');
        return;
      }
      const ctx = cnv.getContext('2d');

      if (ctx === null) {
        console.error('Context not loaded');
        return;
      }

      const { height, width } = ctx.canvas;
      const x = state.points.x as number;
      const y = state.points.y as number;
      const p = new Perspective(ctx, img);
      // it looks ugly but it works
      p.draw({
        topLeftX: 0 + (y > 0 ? y : 0),
        topLeftY: 0 + (x > 0 ? x : 0),
        topRightX: width - (y > 0 ? y : 0),
        topRightY: 0 - (x < 0 ? x : 0),
        bottomRightX: width + (y < 0 ? y : 0),
        bottomRightY: height + (x < 0 ? x : 0),
        bottomLeftX: 0 - (y < 0 ? y : 0),
        bottomLeftY: height - (x > 0 ? x : 0),
      });
    };

    img.src = PongImg;
  };

  useEffect(() => {
    draw2PointKeystone();
    console.log(state);
  }, [state]);

  return (
    <canvas ref={canvasRef} />
  );
};

export default KeystoneCorrectionVisualisation;
