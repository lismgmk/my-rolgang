"use client";

import DynamicIcon from "@/helpers/DynamicIcon";
import CTAShape1 from "@/shapes/cta-s-1";
import CTAShape2 from "@/shapes/cta-s-2";
import CTAShape3 from "@/shapes/cta-s-3";
import { Call_to_action } from "@/types";
import Image from "next/image";
import Link from "next/link";

const CallToAction = ({ callToAction }: { callToAction: Call_to_action }) => {
  const { frontmatter } = callToAction;

  return (
    <div className="container relative z-30">
      <div className="shadow-default relative z-20 overflow-hidden rounded-lg bg-white px-8 py-10 sm:px-14">
        <div className="row items-center text-center sm:text-left">
          <div className="md:col-12 lg:col-7 xl:col-6">
            <h2
              data-aos="fade-up-sm"
              className="mb-6 font-secondary !leading-normal sm:text-[46px]"
            >
              {frontmatter.title}
            </h2>
            <span
              className="inline-block align-middle text-[20px] font-bold text-dark"
              data-aos="fade-up-sm"
              data-aos-delay="50"
            >
              {frontmatter.support.lable}
            </span>
            <ul className="mx-auto mt-2 flex w-fit flex-row gap-8 align-middle text-[28px] sm:ml-7 sm:mt-0 sm:inline-flex">
              {frontmatter.support?.list.map(({ icon, link }, i) => {
                return (
                  <li
                    key={i}
                    className="text-dark"
                    data-aos="fade-up-sm"
                    data-aos-delay={`${100 + i * 50}`}
                  >
                    <a href={link}>
                      <DynamicIcon icon={icon} />
                    </a>
                  </li>
                );
              })}
            </ul>
            <div
              className="mt-10 flex flex-wrap justify-center gap-x-8 gap-y-4 sm:justify-start sm:gap-8"
              data-aos="fade-up-sm"
              data-aos-delay="50"
            >
              {Object.keys(frontmatter.buttons).map((key, i) => {
                const button =
                  frontmatter.buttons[key as "primary" | "secondary"];
                return (
                  button.enable && (
                    <Link
                      key={i}
                      href={button.link}
                      className={`btn btn-md ${
                        key === "primary"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                    >
                      {button.label}
                    </Link>
                  )
                );
              })}
            </div>
          </div>
          {/* <!-- End Call To Action Content --> */}
          <div className="hidden lg:col-5 xl:col-6 lg:block">
            <div className="cta-clip-path relative" data-aos="fade-right-md">
              <Image
                width={470}
                height={484}
                src={frontmatter.image}
                className="mx-auto block"
                alt="banner image"
              />
            </div>
          </div>
          {/* <!-- End Call To Action Image --> */}
        </div>

        {/* <!-- Start CTA BG SHAPES --> */}
        <div
          data-aos="fade-left-sm"
          className="pointer-events-none absolute left-[-65px] top-0 -z-10 select-none sm:left-0"
        >
          <CTAShape1 className="text-secondary" />
        </div>
        <div
          data-aos="fade-right-sm"
          className="pointer-events-none absolute bottom-[40px] right-[-90px] -z-10 select-none xl:right-[-60px]"
        >
          <CTAShape2 className="text-secondary" />
        </div>
        <div className="pointer-events-none absolute bottom-[-120px] left-1/2 -z-10 -translate-x-1/2 select-none sm:bottom-[-90px]">
          <CTAShape3 className="text-quaternary" />
        </div>
      </div>
      {/* <!-- End CTA BG SHAPES --> */}
    </div>
  );
};

export default CallToAction;
