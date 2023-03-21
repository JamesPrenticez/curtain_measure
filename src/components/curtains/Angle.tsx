import React, { type ReactElement } from "react";

interface AngleProps {
  percentage: number;
  height?: number;
  width?: number;
}

const Angle = ({
  percentage,
  height = 200,
  width = 200,
}: AngleProps): ReactElement => {
  const radius = 48;
  const dashArray = radius * Math.PI * 2;
  const dashOffset = dashArray - (dashArray * percentage) / 100;

  return (
    <div className={`flex items-center justify-center w-full `}>
      <svg width={width} height={height} viewBox="0 0 100 100">
        <linearGradient
          id="linear_gradient_progress"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="0%"
        >
          <stop offset="0%" stopColor="#51c5cf" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        {/* <circle 
					id="background_circle"
					strokeDasharray={315}
					strokeDashoffset={0}
					transform="rotate(-90 ) translate(-100 0)"
					strokeLinecap="round"
					cx="50"
					cy="50"
					r={radius} 
					stroke="#ddd"
					strokeWidth="4" 
					fill="none" 
				/> */}
        <circle
          id="progress_circle"
          style={{ transition: "all .3s ease-in-out" }}
          strokeDasharray={dashArray}
          strokeDashoffset={dashOffset}
          transform="rotate(-90 ) translate(-100 0)"
          strokeLinecap="round"
          cx="50"
          cy="50"
          r="48"
          stroke="url(#linear_gradient_progress)"
          strokeWidth="4"
          fill="none"
        />
        <text
          x="50%"
          y="50%"
          fontWeight="bold"
          fontSize="1em"
          textAnchor="middle"
          stroke="none"
          fill="black"
          dy=".3em"
        >
          {String(percentage) + "°"}
        </text>
      </svg>
    </div>
  );
};

export default Angle;
