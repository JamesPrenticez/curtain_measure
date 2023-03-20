import React, { type ReactElement } from 'react';

interface LineProps {
  segments: { length: number; angle: number }[];
  stroke: string;
  strokeWidth: number;
}

const Line = ({ segments, stroke, strokeWidth }: LineProps):ReactElement => {
  const pathData = segments.reduce<number[]>(
    (acc, { length, angle }, index) => {
      const x = index === 0 ? 0 : acc[acc.length - 2];
      const y = index === 0 ? 0 : acc[acc.length - 1];
      const newX = x + length * Math.cos((angle * Math.PI) / 180);
      const newY = y + length * Math.sin((angle * Math.PI) / 180);
      return [...acc, newX, newY];
    },
    []
  );

  const viewBoxSize = Math.max(...pathData.map(Math.abs)) + strokeWidth;
  const viewBox = `0 -${viewBoxSize / 2} ${viewBoxSize * 2} ${viewBoxSize * 2}`
  
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        <path
          d={`M 0,0 L ${pathData.join(' ')}`}
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill="none"
          transform={`translate(${viewBoxSize / 2}, ${viewBoxSize / 2})`}
        />
      </svg>
    </div>
  );
};

export default Line;