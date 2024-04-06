import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import OpenPositions from "@/partials/OpenPositions";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import AboutShape1 from "@/shapes/about-s-1";
import AboutShape2 from "@/shapes/about-s-2";
import { OpenPosition, Testimonial } from "@/types";
import Image from "next/image";

interface CareersPage {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    image: string;

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
  const { title, meta_title, description, image, benefits, openPositions } =
    careerIndex.frontmatter;
  const allPositions: OpenPosition[] = getSinglePage("careers");
  const removeDrafts = allPositions.filter(
    (position) => !position.frontmatter.draft,
  );

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        image={image}
        description={description}
      />

      <PageHeader title={title} description={description} />

      <section className="section relative z-20 mt-[-26rem] overflow-hidden pb-0">
        <div className="container relative">
          <div className="row">
            <div className="col-11 mx-auto">
              <div
                data-aos="fade-up-sm"
                className="relative z-10 rounded-[15px] border-[6px] border-white bg-white sm:border-[12px]"
              >
                <Image
                  className="w-full rounded-[15px] object-cover"
                  src={image}
                  width={1140}
                  height={600}
                  alt="career"
                />
              </div>
            </div>
          </div>
          {/* <!-- Start Shape background --> */}
          <div className="pointer-events-none absolute left-0 top-1/2 -z-10 hidden -translate-y-1/2 select-none md:block lg:left-[-4%]">
            <AboutShape1 className="w-full text-tertiary" />
          </div>
          <div className="pointer-events-none absolute right-0 top-1/2 -z-10 hidden -translate-y-1/2 scale-75 select-none md:block lg:right-[-5%]">
            <AboutShape2 className="text-quaternary" />
          </div>
        </div>
      </section>

      {/* <!-- Benefits --> */}
      <section className="section relative z-20 overflow-hidden">
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
      </section>
      {/* <!-- End Benfits --> */}

      <Testimonials data={testimonial} />

      <OpenPositions
        removeDrafts={removeDrafts}
        openPositions={openPositions}
      />
    </>
  );
};

export default Career;
