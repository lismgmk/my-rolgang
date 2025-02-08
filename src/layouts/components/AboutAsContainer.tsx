"use client";
import DynamicIcon from "@/helpers/DynamicIcon";
import { IAboutAs } from "@/types";
import { useState } from "react";
import Image from "next/image";

const AboutAsContainer = ({
  title,
  subtitle,
  description,
  values,
  image,
}: IAboutAs) => {
  const [tabIndex, setIndex] = useState(0);
  const onTabChange = (index: number) => {
    setIndex(index);
  };
  return (
    <section  className="section relative z-20 ">
      <div id="about_as" className="absolute -top-20"></div>
      <div className="container relative z-30">
        <div className="">
          <div className="">
            <h2
              className="mb-6 text-center font-semibold "
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              {title}
            </h2>
            <div className="flex justify-between flex-wrap lg:flex-nowrap mb-14 gap-7">
              <div className="flex flex-col justify-between h-full lg:py-15 lg:p-12 gap-7">
                <h3
                  className="text-lg lg:py-10"
                  data-aos="fade-up-sm"
                  data-aos-delay="150"
                >
                  {subtitle}
                </h3>
                <p
                  className="text-lg"
                  data-aos="fade-up-sm"
                  data-aos-delay="150"
                >
                  {description}
                </p>
              </div>
              <div className="mx-auto max-w-[600px] xs:py-4 lg:col-6">
                <Image
                  width={840}
                  height={610}
                  src={image}
                  alt="feature image"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="row gy-4" data-tab-group="">
          <div className="colored-box-icon row gy-4">
            {values.map((feature, i) => {
              const { title, icon, description } = feature;
              return (
                <div
                  key={i}
                  data-aos="fade-up-sm"
                  data-aos-delay={`${200 + i * 50}`}
                  className="md:col-6 lg:col-4 xl:col-3"
                >
                  <div className="h-full rounded-2xl border border-border/30 bg-white px-8 py-12 transition-all duration-300 hover:shadow-sm">
                    <div className="icon-box">
                      <DynamicIcon icon={icon} />
                    </div>
                    <h3 className="mb-6 text-xl font-semibold sm:text-2xl">
                      {title}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAsContainer;
