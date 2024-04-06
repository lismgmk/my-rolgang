"use client";

import Counter from "@/components/Counter";
import FunFactShape1 from "@/shapes/fun-fact-s-1";
import FunFactShape2 from "@/shapes/fun-fact-s-2";
import { Projects } from "@/types";

const CounterWrapper = ({
  title,
  subtitle,
  description,
  features,
}: Projects) => {
  return (
    <>
      <section className="section relative z-20 overflow-hidden">
        <div className="container">
          <div data-aos="fade-up-sm" className="row pb-12 text-center">
            <div className="mx-auto lg:col-8">
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
          <div className="row relative">
            <div className="col-12">
              <ul className="list-dotted-line-separator shadow-default flex flex-col justify-center gap-6 rounded-2xl bg-white px-12 py-10 sm:py-14 md:flex-row md:gap-0">
                {features.map((feature, i) => (
                  <li key={i} className="text-center">
                    <Counter {...feature} />
                  </li>
                ))}
              </ul>

              {/* <!-- Start Bg Shape --> */}
              <div
                data-aos="fade-up-md"
                data-aos-delay="50"
                className="pointer-events-none absolute bottom-[-55px] left-[-30px] -z-10 hidden select-none lg:block"
              >
                <FunFactShape1 className="text-quinary" />
              </div>
              <div
                data-aos="fade-down-md"
                data-aos-delay="50"
                className="pointer-events-none absolute right-[-40px] top-[40px] -z-10 hidden select-none lg:block"
              >
                <FunFactShape2 className="text-secondary" />
              </div>
              {/* <!-- End Bg Shape --> */}
            </div>
          </div>
        </div>
      </section>
      {/* <!-- End Fun Fact Section --> */}
    </>
  );
};

export default CounterWrapper;
