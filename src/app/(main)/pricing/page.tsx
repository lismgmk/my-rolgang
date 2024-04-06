import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import Faq from "@/partials/Faq";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import PricingShape1 from "@/shapes/pricing-s-1";
import PricingShape2 from "@/shapes/pricing-s-2";
import { Button, faq } from "@/types";
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";

type PricePlan = {
  title: string;
  icon: string;
  subtitle: string;
  price: string;
  type: string;
  content: string[];
  tag?: string;
};

interface PricePage {
  frontmatter: {
    title: string;
    meta_title?: string;
    description?: string;
    pricing: {
      subtitle: string;
      title: string;
      description?: string;
      button?: Button;
      plans: Array<PricePlan>;
    };
  };
}

const Pricing = () => {
  const data: PricePage = getListPage("pricing/index.md");
  const faq: faq = getListPage("sections/faq.md");
  const { title, meta_title, description, pricing } = data.frontmatter;

  return (
    <>
      <SeoMeta title={meta_title} description={description} />
      <PageHeader title={title} />
      {/* <!-- Pricing --> */}
      <section className="section relative z-20 mt-[-26rem] overflow-hidden">
        <div className="container relative">
          <div className="row g-5">
            <div className="relative order-2 lg:col-10 xl:col-8 xl:order-0">
              <div className="shadow-default flex flex-col justify-between rounded-xl bg-white px-8 py-12 md:flex-row xl:px-14">
                {pricing.plans.map((plan: PricePlan, i) => (
                  <div
                    key={i}
                    data-aos="fade-up-sm"
                    className="px-0 py-3 sm:px-2"
                  >
                    <div className="mb-6 flex items-center gap-4">
                      <Image
                        width={50}
                        height={50}
                        src={plan.icon}
                        alt="icon"
                        className="rounded-md"
                      />
                      {plan.tag && (
                        <span className="rounded-[4px] bg-black px-4 py-[3px] align-middle text-sm font-medium capitalize text-white">
                          {plan.tag}
                        </span>
                      )}
                    </div>

                    <h2
                      className="mb-3 text-xl font-bold text-dark sm:text-2xl"
                      dangerouslySetInnerHTML={markdownify(plan.title)}
                    ></h2>
                    <p
                      className="mb-6 text-dark"
                      dangerouslySetInnerHTML={markdownify(plan.subtitle)}
                    ></p>
                    <div className="block w-full border-b border-b-border border-opacity-70 pb-6">
                      <h2
                        className="h1 plan-price"
                        dangerouslySetInnerHTML={markdownify("$" + plan.price)}
                      ></h2>
                    </div>
                    <ul className="pricing-details">
                      {plan.content.map((item: string, i) => (
                        <li
                          key={i}
                          className="relative mb-5 pl-5 before:absolute before:left-0 before:top-[6px] before:h-[25px] before:w-[25px] before:bg-no-repeat before:content-[''] last-of-type:mb-0"
                          dangerouslySetInnerHTML={markdownify(item)}
                        ></li>
                      ))}
                    </ul>
                    <a
                      href="#?"
                      className={`btn btn-icon ${
                        plan.type.toLowerCase() === "enterprise"
                          ? "btn-primary"
                          : "btn-outline-primary"
                      }`}
                    >
                      Start Free Trial
                      <FaChevronRight />
                    </a>
                  </div>
                ))}
              </div>
              {/* <!-- Start Bg Shape --> */}
              <div
                data-aos="fade-right-sm"
                className="pointer-events-none absolute left-[-6%] top-[-6%] -z-10 hidden select-none xl:block"
              >
                <PricingShape1 className="text-quaternary" />
              </div>
              <div
                data-aos="fade-left-sm"
                className="pointer-events-none absolute bottom-[-12%] right-[-2%] -z-10 hidden select-none xl:block"
              >
                <PricingShape2 className="text-tertiary" />
              </div>
              {/* <!-- End Bg Shape --> */}
            </div>
            <div className="lg:col-12 xl:col-4">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-up-sm"
              >
                {pricing.subtitle}
              </span>
              <div
                className="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                <h2
                  className="font-semibold"
                  dangerouslySetInnerHTML={markdownify(pricing.title)}
                ></h2>
              </div>
              <p
                className="mb-8 pl-6 text-lg"
                data-aos="fade-up-sm"
                data-aos-delay="100"
                dangerouslySetInnerHTML={markdownify(pricing.description!)}
              ></p>
              <span data-aos="fade-up-sm" data-aos-delay="150">
                {pricing.button!.enable && (
                  <a
                    href="/login"
                    className="btn btn-outline-primary btn-icon ml-6 max-w-[250px] md:max-w-[300px]"
                  >
                    {pricing.button!.label}
                    <FaChevronRight className="ml-4" />
                  </a>
                )}
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ./end Pricing --> */}
      <Faq {...faq.frontmatter} />
    </>
  );
};

export default Pricing;
