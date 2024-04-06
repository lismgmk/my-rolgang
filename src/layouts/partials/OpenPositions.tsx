import { markdownify, slugify } from "@/lib/utils/textConverter";
import AboutShape1 from "@/shapes/about-s-1";
import AboutShape4 from "@/shapes/about-s-4";
import { OpenPosition } from "@/types";
import Link from "next/link";
import { BiCurrentLocation } from "react-icons/bi";
import { FaArrowRight, FaRegClock } from "react-icons/fa";

interface props {
  removeDrafts: OpenPosition[];
  openPositions: {
    enable: boolean;
    subtitle: string;
    title: string;
    description: string;
  };
}

const OpenPositions = ({ openPositions, removeDrafts }: props) => {
  return (
    openPositions.enable && (
      <section className="section-md relative z-30 overflow-hidden pt-0">
        <div className="container relative">
          <div className="row pb-12 text-center">
            <div className="mx-auto lg:col-7">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-up-sm"
              >
                {openPositions.subtitle}
              </span>
              <h2
                className="mb-6 font-semibold"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                {openPositions.title}
              </h2>
              <p
                className="text-lg"
                data-aos="fade-up-sm"
                data-aos-delay="100"
                dangerouslySetInnerHTML={markdownify(openPositions.description)}
              ></p>
            </div>
          </div>
          <div className="row gy-4 relative justify-center">
            {removeDrafts.map((job, i) => {
              const { title, description, location, type } = job.frontmatter;
              return (
                <div
                  key={i}
                  data-aos="fade-up-sm"
                  className="md:col-8 lg:col-6 xl:col-5"
                >
                  <Link href={`careers/${slugify(job.slug)}`}>
                    <div className="shadow-default relative h-full rounded-2xl bg-white p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-12">
                      <h3 className="mb-6 text-xl font-semibold text-dark sm:text-2xl">
                        {title}
                      </h3>
                      <p
                        className="text-zinc-500 text-opacity-70"
                        dangerouslySetInnerHTML={markdownify(description)}
                      ></p>
                      <div className="mt-6 flex flex-wrap items-end justify-between gap-y-4">
                        <ul className="mr-4 inline-flex flex-wrap gap-x-4 gap-y-2 font-medium text-dark">
                          <li className="capitalize">
                            <FaRegClock className="mr-2 inline-block" />
                            {type}
                          </li>
                          <li className="capitalize">
                            <BiCurrentLocation className="mr-2 inline-block font-semibold text-red-400" />
                            {location}
                          </li>
                        </ul>
                        <button className="font-semibold text-red-400">
                          Read More{" "}
                          <FaArrowRight className="ml-2 inline-block" />
                          <span className="sr-only">details</span>
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div
            data-aos="fade-left-sm"
            className="pointer-events-none absolute bottom-[-70px] right-6 -z-10 hidden select-none lg:block"
          >
            <AboutShape4 className="text-secondary" />
          </div>
        </div>

        <div
          data-aos="fade-left-sm"
          className="pointer-events-none absolute left-[-7%] top-[30%] -z-10 hidden select-none lg:block"
        >
          <AboutShape1 className="text-tertiary" />
        </div>
      </section>
    )
  );
};

export default OpenPositions;
