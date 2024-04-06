"use client";

import ShowcaseShape1 from "@/shapes/showcase-s-1";
import ShowcaseShape2 from "@/shapes/showcase-s-2";
import { Process } from "@/types";
import Image from "next/image";
import { useState } from "react";
import Tablist from "./TabList";

const TabContainer = ({ description, title, list, subtitle }: Process) => {
  const [tabIndex, setIndex] = useState(0);
  const onTabChange = (index: number) => {
    setIndex(index);
  };
  const content = list[tabIndex];

  return (
    <section className="section relative z-20 overflow-hidden">
      <div className="container relative z-30">
        <div className="row pb-12 text-center">
          <div className="mx-auto lg:col-7">
            <span
              className="mb-6 inline-block font-medium uppercase text-red-400"
              data-aos="fade-up-sm"
              data-aos-delay="50"
            >
              {subtitle}
            </span>
            <h2
              className="mb-6 font-semibold"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              {title}
            </h2>
            <p className="text-lg" data-aos="fade-up-sm" data-aos-delay="150">
              {description}
            </p>
          </div>
        </div>
        <div className="row gy-4" data-tab-group="">
          <Tablist tabIndex={tabIndex} onTabChange={onTabChange} list={list} />
          <div className="relative xl:col-8" data-aos="fade-in">
            <div className="active shadow-default group relative">
              <div className="invisible h-0 opacity-70 transition-opacity duration-300 group-[.active]:visible group-[.active]:h-full group-[.active]:opacity-100">
                <Image
                  width={840}
                  height={610}
                  src={content.image}
                  alt="feature image"
                  className="h-full w-full rounded-xl"
                />
              </div>
            </div>

            {/* <!-- Start Bg Shape --> */}
            <div
              data-aos="fade-up-md"
              className="pointer-events-none absolute right-[-40px] top-[-50px] -z-10 hidden select-none lg:block"
            >
              <ShowcaseShape1 className="text-quinary" />
            </div>
            <div
              data-aos="fade-down-md"
              className="pointer-events-none absolute bottom-[-50px] right-[-40px] -z-10 hidden select-none lg:block"
            >
              <ShowcaseShape2 className="text-quaternary" />
            </div>
            {/* <!-- End Bg Shape --> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabContainer;
