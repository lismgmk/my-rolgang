import BlogCard from "@/components/BlogCard";
import TabContainer from "@/components/TabContainer";
import Line from "@/components/line";
// import config from "@/config/config.json";
import DynamicIcon from "@/helpers/DynamicIcon";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import CounterWrapper from "@/partials/Counter-Wrapper";
import SeoMeta from "@/partials/SeoMeta";
import Testimonials from "@/partials/Testimonials";
import AboutShape1 from "@/shapes/about-s-1";
import {
  Blogs,
  Button,
  Feature,
  Post,
  Process,
  Projects,
  Testimonial,
} from "@/types";
import Image from "next/image";
import Link from "next/link";
import { BsCheckLg } from "react-icons/bs";
import BannerShape from "../../shapes/banner-s-1";
import BannerShape2 from "../../shapes/banner-s-2";
import BlogShape1 from "../../shapes/blog-s-1";
import FeatureShape1 from "../../shapes/feature-s-1";
import FeatureShape2 from "../../shapes/feature-s-2";
import config from "@/config/config.json";
const { blog_folder } = config.settings;

const Home = () => {
  const homepage = getListPage("_index.md");
  const posts: Post[] = getSinglePage(blog_folder);
  const testimonial: Testimonial = getListPage("sections/testimonial.md");
  const { frontmatter } = homepage;
  const {
    banner,
    brands,
    features,
    projects,
    process,
    feature_post,
    blogs,
  }: {
    banner: {
      title: string;
      images: {
        left: string;
        main: string;
        right: string;
      };
      support: {
        title: string;
        list: { icon: string; link: string }[];
      };
      facility: string[];
      content?: string;
      button?: Button;
    };
    brands: { source: string }[];
    feature_post: {
      title: string;
      subtitle: string;
      description: string;
      image: string;
    }[];
    features: Feature;
    process: Process;
    projects: Projects;
    blogs: Blogs;
  } = frontmatter;
  const { images, support, facility } = banner || {};
  const { navigation_buttons_homepage } = config;

  return (
    <>
      <SeoMeta {...frontmatter} />
      <section className="section banner relative overflow-hidden before:z-10 after:z-10">
        <div className="container relative z-30">
          <div className="row items-center">
            <div className="lg:col-6">
              <h1
                data-aos="fade-up-sm"
                className="mb-6 text-[35px] sm:text-[50px] xl:text-[65px]"
                dangerouslySetInnerHTML={markdownify(banner.title)}
              >
              </h1>
              <p
                data-aos="fade-up-sm"
                data-aos-delay="150"
                className="mb-6 text-lg"
                dangerouslySetInnerHTML={markdownify(banner.content ?? "")}
              ></p>
              {/* <form
                data-aos="fade-up-sm"
                data-aos-delay="200"
                className="my-10 flex w-full max-w-[600px] flex-col justify-between rounded-md bg-white p-[6px] shadow-md sm:flex-row"
              > */}
                {/* <input
                  type="search"
                  className="w-full border-0 bg-transparent p-4 pl-6 text-center text-base placeholder:text-neutral-400 focus:border-0 focus:ring-0 sm:text-left"
                  placeholder="Enter Your Email Address"
                /> */}
                <div className="my-10 flex p-[6px] m-[25px]">
                {navigation_buttons_homepage.map((button, i) => {
                  return (
                    <div key={i}>
                      {button.enable && (
                        <Link
                          href={button.link}
                          className={`btn ${
                            i === 0 ? "btn-outline-primary" : "btn-primary"
                          } w-[100px] min-[100px]:w-[100px] lg:w-auto`}
                        >
                          {button.label}
                        </Link>
                      )}
                    </div>
                  );
                })}
              </div>
              {/* </form> */}
              {/* <span
                data-aos="fade-right"
                data-aos-delay="250"
                className="align-middle text-lg font-bold text-dark"
              >
                {support.title}
              </span> */}
              {/* <ul className="mt-2 flex flex-row gap-8 align-middle text-[28px] xs:ml-7 xs:mt-0 xs:inline-flex">
                {support.list.map((item, i) => (
                  <li
                    key={i}
                    data-aos="fade-in"
                    className="text-dark"
                    data-aos-delay={`${300 + 50 * i}`}
                  >
                    <a href={item.link}>
                      <DynamicIcon icon={item.icon} />
                    </a>
                  </li>
                ))}
              </ul> */}
              <div className="py-8">
                <hr className="h-[1px] border-0 border-b border-border/50 bg-transparent" />
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {facility.map((text, i) => {
                  return (
                    <li
                      key={i}
                      data-aos="fade-in"
                      data-aos-delay={100 + i * 50}
                    >
                      <BsCheckLg className="mr-2 inline-block text-2xl text-emerald-400" />
                      <p className="inline-block align-middle text-lg font-medium text-dark">
                        {text}
                      </p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className="mx-auto max-w-[600px] pt-24 lg:col-6 lg:pt-0">
              <div
                data-aos="fade-up-sm"
                className="image-block relative mr-[5.5%] md:mr-6 lg:ml-6"
              >
                <Image
                  width={448}
                  height={564}
                  className="banner-image w-100 h-auto max-w-full"
                  src={images.main}
                  alt="banner-image"
                />
                <Image
                  width={211}
                  height={121}
                  data-aos="fade-down-sm"
                  data-aos-delay="150"
                  className="absolute bottom-16 left-0 w-[40%] rounded-lg shadow-md"
                  src={images.left}
                  alt="banner-image"
                />

                <Image
                  width={211}
                  height={254}
                  data-aos="fade-up-sm"
                  data-aos-delay="200"
                  className="absolute right-0 top-0 w-[30%] rounded-lg md:-right-32 md:top-14 md:w-[40%] xl:top-36"
                  src={images.right}
                  alt="banner-image"
                />
                {/* <!-- Start Start Bg Shape --> */}
                <div
                  data-aos="fade-up-sm"
                  className="pointer-events-none absolute left-[40px] top-[-50px] -z-20 w-[40%] select-none"
                >
                  <BannerShape className="text-secondary" />
                </div>
                <div
                  data-aos="fade-down-sm"
                  className="pointer-events-none absolute bottom-[-70px] right-[-130px] -z-20 w-[40%] select-none"
                >
                  <BannerShape2 className="text-quinary" />
                </div>
                {/* <!-- End Start Bg Shape --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- End Main Content --> */}
        <Line className="line-bg absolute z-20" color="bg-line-yellow" />
        {/* <!-- End background lines --> */}
      </section>
      {/* <!-- End Banner Section --> */}

      {/* <section className="md:section">
        <div className="shadow-default relative z-20 mx-3 max-w-[1440px] rounded-xl bg-white py-8 md:mx-6 md:py-16 lg:mx-auto">
          <div className="container">
            <div className="row justify-center">
              {brands.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="col-5 sm:col-3 lg:col-2"
                    data-aos="fade-up-sm"
                    data-aos-delay={`${150 + 50 * i}`}
                  >
                    <Image
                      width={169}
                      height={92}
                      src={item.source}
                      alt="brand logo"
                      className="inline-block py-4 sm:mx-auto"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section> */}
      {/* <!-- End Brands Section --> */}

      <section className="section features relative z-20 overflow-hidden after:-z-10">
        <div className="container relative z-30">
          <div className="row items-end justify-between pb-12">
            <div className="lg:col-8 xl:col-6">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-up-sm"
              >
                {features.subtitle}
              </span>
              <div
                className="mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0"
                data-aos="fade-up-sm"
              >
                <h2
                  className="mb-6 font-semibold"
                  data-aos="fade-up-sm"
                  data-aos-delay="50"
                >
                  {features.title}
                </h2>
                <p
                  className="text-lg"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                >
                  {features.description}
                </p>
              </div>
            </div>
            <div
              className="col-auto"
              data-aos="fade-right-sm"
              data-aos-delay="150"
            >
              <Link
                aria-disabled={!features.button.enable}
                className="btn btn-outline-primary btn-sm"
                href={features.button.link}
              >
                {features.button.label}
              </Link>
            </div>
          </div>
          <div className="colored-box-icon row gy-4">
            {features.list.map((feature, i) => {
              const { title, icon, description } = feature;
              return (
                <div
                  key={i}
                  data-aos="fade-up-sm"
                  data-aos-delay={`${200 + i * 50}`}
                  className="md:col-6 lg:col-4 xl:col-3"
                >
                  <div className="h-full rounded-2xl border border-border/30 bg-white px-8 py-12 transition-all duration-300 hover:shadow-sm">
                    <div className="icon-box">
                      <DynamicIcon icon={icon} />
                    </div>
                    <h3 className="mb-6 text-xl font-semibold sm:text-2xl">
                      {title}
                    </h3>
                    <p>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* <!-- Start Bg Shape --> */}
        <div
          data-aos="fade-left-sm"
          className="pointer-events-none absolute top-0 hidden select-none min-[1440px]:block"
        >
          <FeatureShape1 className="text-quaternary" />
        </div>
        <div
          data-aos="fade-right-sm"
          className="pointer-events-none absolute right-0 top-52 hidden select-none lg:block"
        >
          <FeatureShape2 className="text-secondary" />
        </div>
        {/* <!-- End Bg Shape --> */}
        <Line className="line-bg absolute z-20" color="bg-line-sky" />
      </section>

      <TabContainer {...process} />
      <CounterWrapper {...projects} />
      {/* <!-- End Showcase Section --> */}

      {feature_post.map((post, i) => {
        const isEven = (i + 1) % 2 === 0;
        return (
          <section
            key={i}
            className={`section-lg feature ${
              isEven ? "triangle-down pt-32" : "triangle-up pb-0"
            } relative z-20 overflow-hidden`}
          >
            <div className="container relative z-20">
              <div className="row gy-4 items-center">
                <div
                  data-aos="fade-left-sm"
                  className={`lg:col-7 ${isEven ? "order-2" : "order-1"}`}
                >
                  <div className={`feature-clip-path-${i + 1} relative`}>
                    <Image
                      width={727}
                      height={613}
                      src={post.image}
                      className="mx-auto block"
                      alt="feature image"
                    />
                    {/* <!-- Start Bg Shape --> */}
                    <div
                      data-aos="fade-right-sm"
                      className="pointer-events-none absolute right-[100px] top-[-10px] -z-10 hidden select-none lg:block"
                    >
                      <FeatureShape1 className="text-quinary" />
                    </div>
                    <div
                      data-aos="fade-left-sm"
                      className="pointer-events-none absolute bottom-[130px] left-0 -z-10 hidden select-none lg:block"
                    >
                      <FeatureShape2 className="text-secondary" />
                    </div>
                    {/* <!-- End Bg Shape --> */}
                  </div>
                </div>
                <div className={`lg:col-5 ${isEven ? "order-1" : "order-2"}`}>
                  <span
                    className="mb-6 inline-block font-medium uppercase text-red-400"
                    data-aos="fade-right-sm"
                  >
                    {post.subtitle}
                  </span>
                  <div
                    data-aos="fade-right-sm"
                    className="mb-6 border-l-2 border-dark border-opacity-50 py-2 pl-6"
                  >
                    <h2
                      className="font-semibold"
                      data-aos="fade-right-sm"
                      data-aos-delay="100"
                    >
                      {post.title}
                    </h2>
                  </div>
                  <p
                    className="pl-6 text-lg"
                    data-aos="fade-right-sm"
                    data-aos-delay="150"
                  >
                    {post.description}
                  </p>
                </div>
              </div>
            </div>
            <Line
              className="line-bg absolute left-0 top-1/2 z-10 flex h-full w-full -translate-y-1/2 justify-between"
              color="bg-line-sky"
            />
          </section>
        );
      })}
      {/* <!-- End Feature Section --> */}

      {/* <Testimonials data={testimonial} /> */}

      <section className="section-md articles relative z-20 overflow-hidden after:-z-10">
        {/* <div className="container relative z-30">
          <div className="row items-end justify-between pb-12">
            <div className="lg:col-8 xl:col-6">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-up-sm"
              >
                {blogs.subtitle}
              </span>
              <div
                data-aos="fade-up-sm"
                className="mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0"
              >
                <h2 className="font-semibold" data-aos="fade-up-sm">
                  {blogs.title}
                </h2>
              </div>
            </div>
            <div data-aos="fade-right-sm" className="col-auto">
              <Link
                href={blogs.button.link}
                className="btn btn-outline-primary btn-sm"
              >
                {blogs.button.label}
              </Link>
            </div>
          </div>
          <div className="row gy-4">
            {posts.slice(0, 3).map((post, i) => (
              <BlogCard key={i} data={post} />
            ))}
          </div>
        </div> */}

        {/* <!-- Start Bg Shape --> */}
        {/* <div
          data-aos="fade-left-sm"
          className="pointer-events-none absolute -left-24 bottom-0 hidden select-none lg:block"
        >
          <AboutShape1 className="text-secondary" />
        </div>
        <div
          data-aos="fade-right-sm"
          className="pointer-events-none absolute right-0 top-52 hidden select-none lg:block"
        >
          <BlogShape1 className="text-quinary" />
        </div> */}
        {/* <!-- End Bg Shape --> */}
        <Line className="line-bg absolute z-20" color="bg-line-sky" />
        {/* <!-- End background lines --> */}
      </section>
      {/* <!-- End Articles Section --> */}
    </>
  );
};

export default Home;
