"use client";

import CustomerStoryShape1 from "@/shapes/customer-story-s-1";
import CustomerStoryShape2 from "@/shapes/customer-story-s-2";
import CustomerStoryShape3 from "@/shapes/customer-story-s-3";
import { Testimonial } from "@/types";
import Image from "next/image";

const Testimonials = ({ data }: { data: Testimonial }) => {
  const { title, subtitle, list } = data.frontmatter;

  return (
    <>
      <section className="section relative z-20 overflow-hidden">
        <div className="container relative z-20">
          <div className="colored-box-bg items-start lg:columns-2">
            <div className="mb-16">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-up-sm"
              >
                {subtitle}
              </span>
              <div
                data-aos="fade-up-sm"
                className="border-l-2 border-dark border-opacity-50 py-2 pl-6"
              >
                <h2 className="font-semibold" data-aos-delay="50">
                  {title}
                </h2>
              </div>
            </div>
            {/* <!-- End Section Title --> */}

            {list.map((item, i) => {
              return (
                <div
                  key={i}
                  data-aos="fade-up-sm"
                  className="shadow-default aos-init aos-animate mb-6 flex flex-col overflow-hidden rounded-xl border border-border/50 bg-white !transition-all !duration-300 last-of-type:mb-0 hover:shadow-sm sm:flex-row sm:border-0"
                >
                  <div className="box-bg">
                    <Image
                      src={item.company_logo}
                      loading="lazy"
                      decoding="async"
                      alt="logo"
                      className="img !max-w-[140px] sm:min-w-[40px] sm:-rotate-90 sm:transform"
                      width="265"
                      height="94"
                    />
                  </div>
                  <div className="px-6 py-12">
                    <h3 className="mb-5 text-xl font-semibold sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mb-6 sm:text-lg">{item.content}</p>
                    <div className="flex items-center gap-4">
                      <Image
                        src={item.avatar}
                        loading="lazy"
                        decoding="async"
                        alt="logo"
                        className="img h-[70px] w-[70px] object-cover"
                        width="65"
                        height="65"
                      />
                      <div className="items-start rounded-full">
                        <div className="flex flex-col justify-center">
                          <h4 className="mb-1 font-primary text-lg">
                            {item.name}
                          </h4>
                          <p>{item.designation}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <!-- Start Bg Shape --> */}
          <div
            data-aos="fade-right-sm"
            className="pointer-events-none absolute left-[-8%] top-[28%] -z-10 hidden select-none lg:block"
          >
            <CustomerStoryShape1 className="text-quaternary" />
          </div>
          <div
            data-aos="fade-up-md"
            className="pointer-events-none absolute right-[-4%] top-[-3%] -z-10 hidden select-none lg:block"
          >
            <CustomerStoryShape2 className="text-dark" />
          </div>
          <div
            data-aos="fade-down-sm"
            className="pointer-events-none absolute bottom-[12%] right-[-4%] -z-10 hidden select-none lg:block"
          >
            <CustomerStoryShape3 className="text-secondary" />
          </div>
          {/* <!-- End Bg Shape --> */}
        </div>
      </section>
      {/* <!-- End Customer Stories Section --> */}
    </>
  );
};

export default Testimonials;
