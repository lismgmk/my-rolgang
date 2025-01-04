"use client";
import config from "@/config/config.json";
import { Process } from "@/types";
import Image from "next/image";
import { useState } from "react";
import Tablist from "./TabList";
import React from "react";
import Link from "next/link";

const TabContainer = ({ description, title, list, subtitle }: Process) => {
  const [tabIndex, setIndex] = useState(0);
  const onTabChange = (index: number) => {
    setIndex(index);
  };
  const content = list[tabIndex];
  const { navigation_buttons } = config;

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
          <div
            className="flex items-center flex-col justify-between relative xl:col-8"
            data-aos="fade-in"
          >
            <Image
              width={840}
              height={610}
              src={content.image}
              alt="feature image"
              className="w-full rounded-xl"
            />
            <Link href={""} className={`btn  btn-outline-primary mt-4`}>
              Оформить заявку
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabContainer;
