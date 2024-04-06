"use client";

import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";
import { useState } from "react";

const Counter = ({
  count,
  unit,
  desc,
}: {
  count: number;
  desc: string;
  unit: string;
}) => {
  const [vizSensorActive, setVizSensorActive] = useState(true);

  return (
    <>
      <span className="mb-6 block font-secondary text-3xl font-bold text-dark md:text-4xl xl:text-6xl">
        <CountUp end={count} redraw={true}>
          {({ countUpRef, start }) => (
            <VisibilitySensor
              active={vizSensorActive}
              onChange={(isVisiable: boolean) => {
                if (isVisiable && VisibilitySensor) setVizSensorActive(false);
                start();
              }}
              delayedCall
            >
              <span ref={countUpRef} />
            </VisibilitySensor>
          )}
        </CountUp>
        {unit}
      </span>
      <div className="text-dark md:text-h6 xl:text-h4">{desc}</div>
    </>
  );
};

export default Counter;
