import AuthorCard from "@/components/AuthorCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Author } from "@/types";
import Link from "next/link";
import { techonoliges } from "@/types";
import { slugify } from "@/lib/utils/textConverter";
import config from "@/config/config.json";
import React from "react";
import Image from "next/image";

const Authors = () => {
  const authorIndex = getListPage("authors/_index.md");
  const authors: Author[] = getSinglePage("authors");
  const { title, meta_title, description, image } = authorIndex.frontmatter;
  const technologies: techonoliges[] = getSinglePage("authors");
  const removeDrafts = technologies.filter(
    (technology) => !technology.frontmatter.draft,
  );
  const { navigation_buttons } = config;



  const pricings = getListPage("pricing/_index.md");
  // const faq: faq = getListPage("sections/faq.md");


  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />

      <section className="section-md mt-[-28rem] md:mt-[-32rem]">
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
                    {draft.content}
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
        </div>
      </section>
    </>
  );
};

export default Authors;
