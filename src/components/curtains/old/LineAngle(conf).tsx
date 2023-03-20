import React,  from 'react';

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
      const angleX = newX - (strokeWidth / 2) * Math.cos((angle * Math.PI) / 180);
      const angleY = newY - (strokeWidth / 2) * Math.sin((angle * Math.PI) / 180);
      return [...acc, newX, newY, angleX, angleY];
    },
    []
  );

  const angleCircles = segments.map(({ length, angle }, index) => {
    if (angle === 0 || angle === 180) return null;
    const x = pathData[index * 4 + 2];
    const y = pathData[index * 4 + 3];
    const radius = strokeWidth / 2;
    const startAngle = angle > 0 ? (angle - 90) * Math.PI / 180 : (angle + 90) * Math.PI / 180;
    const endAngle = startAngle + Math.PI;
    return <circle key={index} cx={x} cy={y} r={radius} fill="none" stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" transform={`rotate(${angle}, ${x}, ${y})`}  d={`M ${x} ${y} L ${x + radius * Math.cos(startAngle)} ${y + radius * Math.sin(startAngle)} A ${radius} ${radius} 0 0 1 ${x + radius * Math.cos(endAngle)} ${y + radius * Math.sin(endAngle)} Z`} />;
  });

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
        />
        {angleCircles}
      </svg>
    </div>
  );
};

export default Line;