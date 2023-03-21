import React, { type ReactElement } from "react";
// import Angle from './Angle';

interface LineProps {
  segments: { length: number; angle: number }[];
  stroke: string;
  strokeWidth: number;
}

const Line = ({ segments, stroke, strokeWidth }: LineProps): ReactElement => {
  // const pathData = segments.reduce<{ x: number; y: number; angleX: number; angleY: number }[]>(
  //   (acc, { length, angle }, index) => {
  //     const x = index === 0 ? 0 : acc[acc.length - 1].x;
  //     const y = index === 0 ? 0 : acc[acc.length - 1].y;
  //     const newX = x + length * Math.cos((angle * Math.PI) / 180);
  //     const newY = y + length * Math.sin((angle * Math.PI) / 180);
  //     const angleX = newX - (strokeWidth / 2) * Math.cos((angle * Math.PI) / 180);
  //     const angleY = newY - (strokeWidth / 2) * Math.sin((angle * Math.PI) / 180);

  //     return [...acc, { x: newX, y: newY, angleX, angleY }];
  //   },
  //   []
  // );

  const pathData = segments.reduce<
    { x: number; y: number; angleX: number; angleY: number; angle: number }[]
  >((acc, { length, angle }, index, arr) => {
    const x = index === 0 ? 0 : acc[acc.length - 1].x;
    const y = index === 0 ? 0 : acc[acc.length - 1].y;
    const newX = x + length * Math.cos((angle * Math.PI) / 180);
    const newY = y + length * Math.sin((angle * Math.PI) / 180);
    const angleX = newX - (strokeWidth / 2) * Math.cos((angle * Math.PI) / 180);
    const angleY = newY - (strokeWidth / 2) * Math.sin((angle * Math.PI) / 180);

    const prevSegment = arr[index - 1];
    console.log(prevSegment);
    const segment1Angle = index === 0 ? 0 : acc[index - 1].angle;
    const segment2Angle = angle;
    // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
    const direction = prevSegment
      ? Math.sign(angle - prevSegment.angle)
      : Math.sign(angle);

    const externalAngle =
      (((segment2Angle - segment1Angle + 360) % 360) + 180 * direction) % 360;
    const internalAngle = 360 - externalAngle;

    console.log(`External angle: ${externalAngle} degrees`);
    console.log(`Internal angle: ${internalAngle} degrees`);

    return [
      ...acc,
      { x: newX, y: newY, angleX, angleY, angle, externalAngle, internalAngle },
    ];
  }, []);

  // Slice the angleX and angleY as they do not effect the size of the viewbox
  const viewBoxSize =
    Math.max(
      ...pathData.slice(0, -1).map(({ x, y }) => Math.abs(x) + Math.abs(y))
    ) + strokeWidth;
  const viewBox = `0 -${viewBoxSize / 2} ${viewBoxSize * 2} ${viewBoxSize * 2}`;

  const textElements = segments.map(({ length, angle }, index) => {
    const startX = index === 0 ? 0 : pathData[index - 1].x;
    const startY = index === 0 ? 0 : pathData[index - 1].y;
    const endX = pathData[index].x;
    const endY = pathData[index].y;
    const midX = (startX + endX) / 2;
    const midY = (startY + endY) / 2;

    const textX = angle > 0 ? midX + 650 : angle < 0 ? midX - 650 : midX;
    const textY = angle > 0 ? midY + -250 : angle < 0 ? midY - 250 : midY;

    return (
      <text
        key={index}
        x={textX}
        y={textY + strokeWidth}
        textAnchor="middle"
        dominantBaseline="hanging"
        fill={stroke}
        fontSize={250}
        transform={`translate(${viewBoxSize / 2}, ${viewBoxSize / 2})`}
      >
        {`${length.toFixed(0)}mm`}
      </text>
    );
  });

  return (
    <div className="flex justify-center">
      <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
        <path
          d={`M 0,0 L ${pathData.map(({ x, y }) => `${x},${y}`).join(" ")}`}
          stroke={stroke}
          strokeWidth={strokeWidth}
          fill="none"
          transform={`translate(${viewBoxSize / 2}, ${viewBoxSize / 2})`}
        />
        {textElements}
      </svg>
    </div>
  );
};

export default Line;
