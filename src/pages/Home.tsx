// https://www.crosbyblinds.co.uk/measuring
// import Line from "../components/curtains/Line";
// import Angle from "../components/curtains/Angle";

import React, { useState, type ReactElement, type FormEvent } from "react";
import { Input } from "../components/lib/Input";

interface Curtain {
  id: number;
  dimensions: Dimention[];
}

interface Dimention {
  id: string;
  length: number;
  angle: number;
}

const Home = (): ReactElement => {
  const [curtains, setCurtains] = useState<Curtain[]>([]);

  const handleAddCurtain = (): void => {
    const defaultDimensions = [
      { id: "1", length: 300, angle: 0 },
      { id: "2", length: 550, angle: 0 },
      { id: "3", length: 1050, angle: 0 },
      { id: "4", length: 550, angle: 0 },
      { id: "5", length: 300, angle: 0 },
    ];

    const newCurtain = {
      id: curtains.length + 1,
      dimensions: defaultDimensions,
    };
    setCurtains([...curtains, newCurtain]);
  };

  const handleOnChangeCurtain = (
    curtainId: number,
    segmentId: string,
    length: number,
    angle: number
  ): void => {
    setCurtains((prevCurtains) =>
      prevCurtains.map((curtain) =>
        curtain.id !== curtainId
          ? curtain
          : {
              ...curtain,
              dimensions: curtain.dimensions.map((segment, index) =>
                index !== Number(segmentId.slice(-1)) - 1
                  ? segment
                  : { ...segment, length, angle }
              ),
            }
      )
    );
  };

  const handleFormSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(curtains);
  };

  return (
    <div className="flex w-full max-w-7xl mx-auto min-h-screenNav bg-white">
      <div className="flex w-full justify-center items-center bg-orange-300">
        <form onSubmit={handleFormSubmit}>
          {curtains.map((curtain) => (
            <div key={curtain.id}>
              {curtain.id}
              {curtain.dimensions.map((dimension) => (
                <p key={dimension.id}>
                  {dimension.length}

                  <Input
                    id={dimension.id}
                    name="length"
                    type="number"
                    value={dimension.length}
                    onChange={(e) => {
                      handleOnChangeCurtain(
                        curtain.id,
                        e.target.id,
                        Number(e.target.value),
                        0
                      );
                    }}
                  />
                </p>
              ))}
            </div>
          ))}

          <button
            type="button"
            className="bg-green-500 p-4 text-white"
            onClick={() => {
              handleAddCurtain();
            }}
          >
            Add Square
          </button>

          {curtains.length > 0 && (
            <button type="submit" className="bg-blue-500 p-4 text-white">
              Submit
            </button>
          )}
        </form>
      </div>
    </div>
  );
};

export default Home;

// <div className="bg-white h-[500px] w-[500px]">
// <Line segments={segments} stroke="black" strokeWidth={50} />
// </div>
