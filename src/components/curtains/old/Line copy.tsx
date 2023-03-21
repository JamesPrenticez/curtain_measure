// import React, { type ReactElement } from "react";
// // import Angle from './Angle';

// interface LineProps {
//   segments: { length: number; angle: number }[];
//   stroke: string;
//   strokeWidth: number;
// }

// const Line = ({ segments, stroke, strokeWidth }: LineProps): ReactElement => {

//   const pathData = segments.reduce<number[]>(
//     (acc, { length, angle }, index) => {
//       const x = index === 0 ? 0 : acc[acc.length - 2];
//       const y = index === 0 ? 0 : acc[acc.length - 1];
//       const newX = x + length * Math.cos((angle * Math.PI) / 180);
//       const newY = y + length * Math.sin((angle * Math.PI) / 180);

//       const angleX = newX - (strokeWidth / 2) * Math.cos((angle * Math.PI) / 180);
//       const angleY = newY - (strokeWidth / 2) * Math.sin((angle * Math.PI) / 180);

//       return [...acc, newX, newY, angleX, angleY];
//     },
//     []
//   );

//   const viewBoxSize = Math.max(...pathData.map(Math.abs)) + strokeWidth;
//   const viewBox = `0 -${viewBoxSize / 2} ${viewBoxSize * 2} ${viewBoxSize * 2}`;

//   const textElements = segments.map(({ length, angle }, index) => {
//     const startX = index === 0 ? 0 : pathData[index * 2 - 2];
//     const startY = index === 0 ? 0 : pathData[index * 2 - 1];
//     const endX = pathData[index * 2];
//     const endY = pathData[index * 2 + 1];
//     const midX = (startX + endX) / 2;
//     const midY = (startY + endY) / 2;

//     const textX = angle > 0 ? midX + 650 : angle < 0 ? midX - 650 : midX;
//     const textY = angle > 0 ? midY + -250 : angle < 0 ? midY - 250 : midY;

//     return (
//       <text
//         key={index}
//         x={textX}
//         y={textY + strokeWidth}
//         textAnchor="middle"
//         dominantBaseline="hanging"
//         fill={stroke}
//         fontSize={250}
//         transform={`translate(${viewBoxSize / 2}, ${viewBoxSize / 2})`}
//       >
//         {`${length.toFixed(0)}mm`}
//       </text>
//     );
//   });

//   const angleElements = segments.map(({ length, angle }, index) => {
//     // if (angle === 0 || angle === 180) return null;
//     console.log(angle);
//     const x = pathData[index * 4 + 2];
//     const y = pathData[index * 4 + 3];
//     const radius = strokeWidth / 2;
//     const startAngle = angle > 0 ? (angle - 90) * Math.PI / 180 : (angle + 90) * Math.PI / 180;
//     const endAngle = startAngle + Math.PI;
//     return (
//       <circle
//         key={index}
//         cx={x}
//         cy={y}
//         r={radius}
//         fill="none"
//         stroke="red"
//         strokeWidth={250}
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         transform={`translate(${viewBoxSize / 2}, ${viewBoxSize / 2})`}
//       />
//     )
//   });

//   return (
//     <div className="flex justify-center">
//       <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg">
//         <path
//           d={`M 0,0 L ${pathData.join(" ")}`}
//           stroke={stroke}
//           strokeWidth={strokeWidth}
//           fill="none"
//           transform={`translate(${viewBoxSize / 2}, ${viewBoxSize / 2})`}
//         />
//         {textElements}
//         {/* {angleElements} */}
//       </svg>
//     </div>
//   );
// };

// export default Line;
