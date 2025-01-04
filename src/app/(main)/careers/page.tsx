import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { slugify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { OpenPosition, Testimonial } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CareersPage {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image: string;
    icon: string;

    benefits: {
      subtitle: string;
      title: string;
      description?: string;
      list: Array<{
        icon: { name: string };
        title: string;
        content: string;
      }>;
    };
    openPositions: {
      enable: boolean;
      subtitle: string;
      title: string;
      description: string;
    };
  };
}

const Career = () => {
  const testimonial: Testimonial = getListPage("sections/testimonial.md");
  const careerIndex: CareersPage = getListPage("careers/_index.md");
  const { title, meta_title, description, image, icon, benefits, openPositions } =
    careerIndex.frontmatter;
  const allPositions: OpenPosition[] = getSinglePage("careers");
  const removeDrafts = allPositions.filter(
    (position) => !position.frontmatter.draft,
  );
  const { navigation_buttons } = config;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        image={image}
        description={description}
      />

      <PageHeader title={title} description={description} />

      <section className="section-md relative mt-[-28rem] overflow-hidden md:mt-[-32rem]">
        <div className="container relative z-20">
          <div className="row gy-4">
            {removeDrafts.map((draft, i) => {
              return (
                <div
                  key={i}
                  data-aos="fade-up-sm"
                  className="md:col-6 lg:col-4"
                >
                  <div className="shadow-default overflow-hidden rounded-xl bg-white p-7">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-y-4">
                      <Image
                        width={300}
                        height={80}
                        className="rounded-xl"
                        src={draft.frontmatter.icon}
                        alt="icon"
                      />
                    </div>
                    <h3 className="mb-4 font-primary text-xl font-semibold text-dark sm:text-1.9xl">
                      <Link
                        href={`/integration/${slugify(
                          draft.frontmatter.title,
                        )}`}
                      >
                        {draft.frontmatter.title}
                      </Link>
                    </h3>
                    <p>{draft.frontmatter.description}</p>
                    {navigation_buttons.map((button, i) => {
                      return (
                        <React.Fragment key={i}>
                          {button.enable && (
                            <Link
                              href={button.link}
                              className={`btn ${
                                i === 0 ? "btn-outline-primary" : "btn-primary"
                              } w-[200px] min-[340px]:w-[300px] lg:w-auto`}
                            >
                              {button.label}
                            </Link>
                          )}
                        </React.Fragment>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          {/* <!-- Start Bg Shape --> */}
          {/* <div className="pointer-events-none absolute left-[-4%] top-[30%] -z-10 select-none">
            <IntegrationShape1 className="text-tertiary" />
          </div> */}
          {/* <div className="pointer-events-none absolute bottom-[30%] right-[-5%] -z-10 select-none">
            <IntegrationShape2 className="text-quaternary" />
          </div> */}
          {/* <!-- End Bg Shape --> */}
        </div>
      </section>

      {/* <!-- Benefits --> */}
      {/* <section className="section relative z-20 overflow-hidden">
        <div className="container">
          <div className="row pb-12 text-center">
            <div className="mx-auto lg:col-7">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-up-sm"
              >
                {benefits.subtitle}
              </span>
              <h2
                className="mb-6 font-semibold"
                data-aos="fade-up-sm"
                data-aos-delay="50"
                dangerouslySetInnerHTML={markdownify(benefits.title)}
              ></h2>
              <p
                className="text-lg"
                data-aos="fade-up-sm"
                data-aos-delay="100"
                dangerouslySetInnerHTML={markdownify(benefits.description!)}
              ></p>
            </div>
          </div>
          <div className="colored-box-icon has-colored-text row gy-4">
            {benefits.list.map((benefit, i) => {
              return (
                <div
                  key={i}
                  data-aos="fade-up-sm"
                  data-aos-delay="50"
                  className="md:col-6 lg:col-4"
                >
                  <div className="shadow-default h-full rounded-2xl bg-white p-8 text-center transition-all duration-300 hover:shadow-md sm:p-12">
                    <div className="icon-box mx-auto">
                      <DynamicIcon icon={benefit.icon.name} />
                    </div>
                    <h3 className="mb-6 text-xl font-semibold text-dark sm:text-2xl">
                      {benefit.title}
                    </h3>
                    <p
                      className="mb-0"
                      dangerouslySetInnerHTML={markdownify(benefit.content)}
                    ></p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}
      {/* <!-- End Benfits --> */}

      {/* <Testimonials data={testimonial} />

      <OpenPositions
        removeDrafts={removeDrafts}
        openPositions={openPositions}
      /> */}
    </>
  );
};

export default Career;
