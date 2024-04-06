import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { slugify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import IntegrationShape1 from "@/shapes/integration-s-1";
import IntegrationShape2 from "@/shapes/integration-s-2";
import { techonoliges } from "@/types";
import Image from "next/image";
import Link from "next/link";

const Integration = () => {
  const integrationIndex = getListPage(`integrations/_index.md`);
  const { title, meta_title, description } = integrationIndex.frontmatter;
  const technologies: techonoliges[] = getSinglePage("integrations");
  const removeDrafts = technologies.filter(
    (technology) => !technology.frontmatter.draft,
  );

  return (
    <main>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
      />
      <PageHeader
        title={integrationIndex.frontmatter.title}
        breadcrumb={true}
      />
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
                  <div className="shadow-default overflow-hidden rounded-xl bg-white p-10">
                    <div className="mb-6 flex flex-wrap items-center justify-between gap-y-4">
                      <Image
                        width={72}
                        height={72}
                        className="rounded-xl"
                        src={draft.frontmatter.icon}
                        alt="icon"
                      />
                      <a href="#" className="btn btn-outline-primary">
                        <DynamicIcon
                          className="mr-3 inline-block h-5 w-5 fill-current"
                          icon="FaPlus"
                        />
                        Install
                      </a>
                    </div>
                    <h3 className="mb-4 font-primary text-xl font-semibold text-dark sm:text-2xl">
                      <Link
                        href={`/integration/${slugify(
                          draft.frontmatter.title,
                        )}`}
                      >
                        {draft.frontmatter.title}
                      </Link>
                    </h3>
                    <p>{draft.frontmatter.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* <!-- Start Bg Shape --> */}
          <div className="pointer-events-none absolute left-[-4%] top-[30%] -z-10 select-none">
            <IntegrationShape1 className="text-tertiary" />
          </div>
          <div className="pointer-events-none absolute bottom-[30%] right-[-5%] -z-10 select-none">
            <IntegrationShape2 className="text-quaternary" />
          </div>
          {/* <!-- End Bg Shape --> */}
        </div>
      </section>
      {/* <!-- End Integration Section --> */}
    </main>
  );
};

export default Integration;
