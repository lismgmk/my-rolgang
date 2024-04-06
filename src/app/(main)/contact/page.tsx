import { getListPage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import ContactShape1 from "@/shapes/contact-s-1";
import ContactShape2 from "@/shapes/contact-s-2";
import { RegularPage } from "@/types";

const Contact = async () => {
  const data: RegularPage = getListPage("contact/index.md");
  const { frontmatter } = data;
  const { title, description, meta_title, image, supports } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-md relative mt-[-28rem] overflow-hidden md:mt-[-32rem]">
        <div className="container relative z-30">
          <div className="row relative">
            <div className="mx-auto md:col-10">
              <div
                data-aos="fade-up-sm"
                className="shadow-default rounded-2xl bg-white px-8 py-10 sm:px-16 sm:py-14"
              >
                <form method="post" className="row gy-4 text-dark">
                  <div className="sm:col-6">
                    <label htmlFor="fname" className="form-label">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your First Name"
                      id="fname"
                      name="fname"
                      required
                    />
                  </div>
                  <div className="sm:col-6">
                    <label htmlFor="lname" className="form-label">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-input"
                      placeholder="Your Last Name"
                      id="lname"
                      name="lname"
                      required
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="email" className="form-label">
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-input"
                      placeholder="Your Email Address"
                      id="email"
                      required
                      name="email"
                    />
                  </div>
                  <div className="col-12">
                    <label htmlFor="purpose" className="form-label">
                      Reason/Purpose
                    </label>
                    <select
                      id="purpose"
                      required
                      className="w-full rounded-lg border-border px-5 py-4 text-sm"
                    >
                      <option value="0">General Inquiry</option>
                      <option value="1">Support Request</option>
                      <option value="2">Partnership Opportunity</option>
                    </select>
                  </div>
                  <div className="col-12">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      name="message"
                      className="form-textarea"
                      placeholder="Your Message"
                      id="message"
                      cols={30}
                      required
                      rows={4}
                    ></textarea>
                  </div>
                  <div className="col-12 text-right">
                    <button type="submit" className="btn btn-primary">
                      Submit Now
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* <!-- Start Bg Shape --> */}
            <div
              data-aos="fade-right-sm"
              className="pointer-events-none absolute bottom-[-8%] left-[5%] -z-10 hidden w-fit lg:block"
            >
              <ContactShape1 className={"text-quaternary"} />
            </div>
            <div
              data-aos="fade-left-sm"
              className="pointer-events-none absolute right-[4%] top-[35%] -z-10 hidden w-fit lg:block"
            >
              <ContactShape2 className={"text-tertiary"} />
            </div>
            {/* <!-- End Bg Shape --> */}
          </div>
          {}
          <div className="row gy-4 pt-12 text-center md:justify-between md:pt-24 lg:justify-around">
            {supports.map((support, i) => {
              return (
                <div key={i} data-aos="fade-up-sm" className="md:col-auto">
                  <h2 className="sm:3xl mb-5 text-2xl font-semibold text-dark md:text-4xl">
                    {support.type}
                  </h2>
                  <p className="mb-2 text-lg sm:text-xl">
                    <a
                      className="hover:underline hover:underline-offset-2"
                      href="mailto:support@company.com"
                    >
                      {support.email}
                    </a>
                  </p>
                  <p className="text-lg sm:text-xl">
                    <a
                      className="hover:underline hover:underline-offset-2"
                      href="tel:+1 234 567 8999"
                    >
                      {support.mobile}
                    </a>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
