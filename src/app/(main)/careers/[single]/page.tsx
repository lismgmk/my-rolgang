import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import { OpenPosition } from "@/types";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const positions: OpenPosition[] = getSinglePage("careers");
  const paths = positions.map((position) => ({
    single: position.slug!,
  }));

  return paths;
};

const CareerSingle = ({ params }: { params: { single: string } }) => {
  const positions: OpenPosition[] = getSinglePage("careers");
  const position = positions.filter((page) => page.slug === params.single)[0];
  const { title } = position.frontmatter;

  return (
    <>
      <PageHeader title={title} />
      <section className="section-md relative z-20 mt-[-28rem] md:mt-[-32rem]">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div
                data-aos="fade-up-sm"
                data-aos-delay="100"
                className="shadow-default rounded-2xl bg-white px-8 py-8 sm:px-14 sm:py-14 lg:px-24 lg:py-[85px]"
              >
                <div className="row gy-4">
                  <div className="content prose lg:col-7">
                    <MDXContent content={position.content} />
                  </div>
                  <div className="lg:col-5">
                    <div className="sticky top-[120px] rounded-2xl bg-theme-light/40 p-6 md:px-8 md:py-12">
                      <h2 className="mb-4 text-xl sm:text-2xl">Apply Today</h2>
                      <p className="mb-6">
                        Management, investments. You’ll be on arguably the most
                        important
                      </p>
                      <a
                        href="#"
                        className="btn btn-sm btn-primary w-full text-center"
                      >
                        Apply Now
                      </a>
                    </div>
                  </div>
                  {/* <!-- End Sidebar --> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerSingle;
