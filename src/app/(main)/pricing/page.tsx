import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { slugify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { techonoliges } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Pricing = () => {
  const pricings = getListPage("pricing/_index.md");
  // const faq: faq = getListPage("sections/faq.md");
  const { title, meta_title, description } = pricings.frontmatter;
  const technologies: techonoliges[] = getSinglePage("pricing");
  const removeDrafts = technologies.filter(
    (technology) => !technology.frontmatter.draft,
  );
  const { navigation_buttons } = config;

  return (
    <>
      <SeoMeta title={meta_title} description={description} />
      <PageHeader title={title} />
      {/* <!-- Pricing --> */}
      <section className="section relative z-20 mt-[-26rem] overflow-hidden">
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

      {/* <Faq {...faq.frontmatter} /> */}
    </>
  );
};

export default Pricing;
