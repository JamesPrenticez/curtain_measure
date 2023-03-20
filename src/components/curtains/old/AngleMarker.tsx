// import React, {type ReactElement} from 'react'

// interface AngleMarkerProps {
//   angle: number;
//   x: number;
//   y: number;
//   r: number;
// }

// const AngleMarker = ({ angle, x, y, r }: AngleMarkerProps): ReactElement => {
//   const textX = x + r * Math.cos((angle / 2) * (Math.PI / 180));
//   const textY = y - r * Math.sin((angle / 2) * (Math.PI / 180));

//   return (
//     <>
//       {/* <circle 
//         cx={x}
//         cy={y}
//         r={1000}
//         fill="none"
//         stroke="red"
//         strokeWidth={50}
//         strokeDasharray="100 160"
//         style={{ margin: "auto", shapeRendering: "auto" }}
        
//       >
        
//       </circle>
//       <text x={textX} y={textY} fontSize={500} textAnchor="middle">
//         {angle}
//       </text> */}

//     <svg viewBox="0 0 64 64" fill="red" width="3000px" className="pie" >
//       {/* <circle r="25%" cx="50%" cy="50%" strokeWidth={32} style={{ strokeDasharray: "75.3 100" }}></circle> */}
//       {/* <circle r="25%" cx="50%" cy="50%" strokeWidth={32} style={{ strokeDasharray: "19.9 100", stroke: "green", strokeDashoffset: "-75.3" }}></circle>
//       <circle r="25%" cx="50%" cy="50%" strokeWidth={32} style={{ strokeDasharray: "2.3 100", stroke: "gold", strokeDashoffset: "-95.2" }}></circle>
//       <circle r="25%" cx="50%" cy="50%" strokeWidth={32} style={{ strokeDasharray: "1.4 100", stroke: "orange", strokeDashoffset: "-97.5"}}></circle> */}
//       <circle r="25%" cx="50%" cy="50%" fill="none" strokeWidth={32} style={{ strokeDasharray: "1.1 100", stroke: "red", strokeDashoffset: "-98.9" }}></circle>
//     </svg>
//     </>
//   );
// };

// export default AngleMarker