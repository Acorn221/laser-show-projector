import Perspective from 'perspectivets';
import { useEffect, useRef, useContext } from 'react';
import { Settings } from '@/App';
import PongImg from '@/Pong.jpg';

export interface KeystoneCorrectionSettings {
	enabled: boolean;
	points: {
			x: number;
			y: number;
	}
}

const KeystoneCorrectionVisualisation = () => {
  const context = useContext(Settings);
  const { state } = context.currentSettings.keystoneCorrection;
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
      const x = state.xOffset;
      const y = state.yOffset;
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
  draw2PointKeystone();

  return (
    <canvas ref={canvasRef} />
  );
};

export default KeystoneCorrectionVisualisation;
