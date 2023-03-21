import React, { type ReactElement } from "react";
import Line from "../components/curtains/Line";
import Angle from "../components/curtains/Angle";

interface Segments {
  length: number;
  angle: number;
}

function Home(): ReactElement {
  const segments: Segments[] = [
    { length: 400, angle: 0 },
    { length: 600, angle: -45 },
    { length: 4000, angle: 0 },
    { length: 600, angle: 45 },
    { length: 400, angle: 0 },
  ];

  return (
    <div className="flex w-full max-w-7xl mx-auto min-h-screenNav bg-white">
      <div className="flex w-full justify-center items-center bg-orange-300">
        <div className="bg-white h-[500px] w-[500px]">
          <Line segments={segments} stroke="black" strokeWidth={50} />
        </div>
        <div>
          <Angle percentage={50} />
        </div>
      </div>
    </div>
  );
}

export default Home;
