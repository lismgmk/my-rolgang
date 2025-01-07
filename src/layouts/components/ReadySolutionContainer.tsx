"use client";
import config from "@/config/config.json";
import { IReadySolutions } from "@/types";
import { useState } from "react";
import TablistReadySolution from "./TabListReadySolution";

const ReadySolutionContainer = ({
  subtitleLeft,
  title,
  descriptionLeft,
  subtitleRight,
  descriptionRight,
  titlePlastick,
  listPlastick,
  titleSteal,
  listSteal,
}: IReadySolutions) => {
  const [tabIndex, setIndex] = useState(0);
  const onTabChange = (index: number) => {
    console.log("+++");
    setIndex(index);
  };
  const { navigation_buttons } = config;

  return (
    <section
     
      className="section relative z-20 overflow-hidden"
    >
      <div className="container">
        <h2
          className="mb-6 font-semibold text-center"
          data-aos="fade-up-sm"
          data-aos-delay="100"
        >
          {title}
        </h2>
        <div className="grid w-full gap-4 sm:grid-cols-1 lg:grid-cols-2">
          <div className="w-full  px-2 ">
            <h3
              className="text-lg text-left py-2"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              {subtitleLeft}
            </h3>
            <p className="text-lg" data-aos="fade-up-sm" data-aos-delay="150">
              {descriptionLeft}
            </p>
          </div>
          <div className="w-full px-2">
            <h3
              className="text-lg py-2"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              {subtitleRight}
            </h3>
            <p className="text-lg" data-aos="fade-up-sm" data-aos-delay="150">
              {descriptionRight}
            </p>
          </div>
        </div>

        <h2
          className="xl:text-2xl text-center text-lg lg:py-16 xs:py-8"
          data-aos="fade-up-sm"
          data-aos-delay="150"
        >
          {titlePlastick}
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <TablistReadySolution
            tabIndex={tabIndex}
            onTabChange={onTabChange}
            list={listPlastick}
          />
        </div>
        <h2
          className="xl:text-2xl text-center text-lg lg:py-16 xs:py-8"
          data-aos="fade-up-sm"
          data-aos-delay="150"
        >
          {titleSteal}
        </h2>
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <TablistReadySolution
            tabIndex={tabIndex}
            onTabChange={onTabChange}
            list={listSteal}
          />
        </div>
      </div>
    </section>
  );
};

export default ReadySolutionContainer;
