import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { techonoliges } from "@/types";
import Image from "next/image";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const techonoliges: techonoliges[] = getSinglePage("integrations");
  const paths = techonoliges.map((technology) => ({
    single: technology.slug!,
  }));

  return paths;
};

const IntegrationSingle = ({ params }: { params: { single: string } }) => {
  const techonoliges: techonoliges[] = getSinglePage("integrations");
  const techonoligy: techonoliges = techonoliges.filter(
    (page) => page.slug === params.single,
  )[0];

  const { frontmatter, content } = techonoligy;

  return (
    <>
      <SeoMeta
        title={frontmatter.title}
        meta_title={frontmatter.meta_title}
        description={frontmatter.description}
      />
      <PageHeader title={`How To Integrate With ${frontmatter.title}`} />
      <section className="section-md relative z-20 mt-[-28rem] md:mt-[-32rem]">
        <div className="container">
          <div className="row">
            <div className="mx-auto lg:col-11">
              <div
                data-aos="fade-up-sm"
                data-aos-delay="100"
                className="shadow-default rounded-2xl bg-white px-8 py-8 sm:px-14 sm:py-14 lg:px-24 lg:py-24"
              >
                <div className="mb-12 flex flex-col flex-wrap items-start justify-between gap-y-4 border-b border-border border-opacity-50 pb-14 sm:flex-nowrap md:flex-row md:items-center">
                  <div className="mb-4 flex flex-wrap items-center gap-6 md:mb-0">
                    <div className="h-[85px] w-[85px] overflow-hidden rounded-2xl md:h-[110px] md:w-[110px]">
                      <Image
                        src={frontmatter.icon}
                        className="h-full w-full"
                        width={110}
                        height={110}
                        alt="icon"
                      />
                    </div>
                    <div>
                      <h2
                        className="mb-4 font-primary text-3xl font-semibold text-dark sm:text-4xl"
                        dangerouslySetInnerHTML={markdownify(
                          frontmatter.title + " integration",
                        )}
                      ></h2>
                      <p
                        className="w-full max-w-[500px] text-lg"
                        dangerouslySetInnerHTML={markdownify(
                          frontmatter.description,
                        )}
                      ></p>
                    </div>
                  </div>
                  <a href="#" className="btn btn-primary btn-md">
                    Install Now
                  </a>
                </div>
                <div className="content prose">
                  <MDXContent content={content} />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Main Content --> */}
      </section>
    </>
  );
};

export default IntegrationSingle;
