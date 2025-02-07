"use client";
import DynamicIcon from "@/helpers/DynamicIcon";
import { IAboutAs } from "@/types";
import { useState } from "react";

const AboutAsContainer = ({
  title,
  subtitle,
  description,
  values,
}: IAboutAs) => {
  const [tabIndex, setIndex] = useState(0);
  const onTabChange = (index: number) => {
    setIndex(index);
  };

  return (
    <section
      id="about_as"
      className="section relative z-20 "
    >
      <div className="container relative z-30">
        <div className="row pb-12 ">
          <div className="mx-auto ">
            <h2
              className="mb-6 text-center font-semibold "
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              {title}
            </h2>
            <p className="text-lg" data-aos="fade-up-sm" data-aos-delay="150">
              {subtitle}
            </p>
            <p className="text-lg" data-aos="fade-up-sm" data-aos-delay="150">
              {description}
            </p>
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
