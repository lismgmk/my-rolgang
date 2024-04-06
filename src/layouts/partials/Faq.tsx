import { markdownify } from "@/lib/utils/textConverter";
import Accordion from "@/shortcodes/Accordion";
import { faq } from "@/types";

const Faq = ({
  title,
  subtitle,
  description,
  faqs,
  enable,
}: faq["frontmatter"]) => {
  return (
    enable && (
      <>
        {/* <!-- Faq --> */}
        <section className="section-md faq relative z-20 after:-z-10">
          <div className="container relative z-30">
            <div className="row gy-4 justify-between">
              <div className="lg:col-5">
                <span
                  className="mb-6 inline-block font-medium uppercase text-red-400"
                  data-aos="fade-up-sm"
                >
                  {subtitle}
                </span>
                <div
                  className="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6"
                  data-aos="fade-up-sm"
                  data-aos-delay="50"
                >
                  <h2
                    className="font-semibold"
                    dangerouslySetInnerHTML={markdownify(title)}
                  ></h2>
                </div>
                <p
                  className="pl-6 text-lg"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                  dangerouslySetInnerHTML={markdownify(description!)}
                ></p>
              </div>
              <div className="lg:col-6">
                {faqs.map((faq, i) => (
                  <Accordion key={i} title={faq.title}>
                    <p dangerouslySetInnerHTML={markdownify(faq.body)}></p>
                  </Accordion>
                ))}
              </div>
            </div>
          </div>

          <div className="line-bg absolute z-20">
            <div className="container flex justify-between">
              <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
              <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
              <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
              <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
              <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
              <span className="bg-line-sky inline-block h-full opacity-50 md:opacity-100"></span>
            </div>
          </div>
        </section>
        {/* <!-- End Faq --> */}
      </>
    )
  );
};

export default Faq;
