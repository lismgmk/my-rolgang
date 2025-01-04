import TabContainer from "@/components/TabContainer";
// import config from "@/config/config.json";
import config from "@/config/config.json";
import { getListPage } from "@/lib/contentParser";
import { markdownify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import Image from "next/image";
const { blog_folder } = config.settings;

const Home = () => {
  const mainBlock = getListPage("sections/first-title.md");
  const homepage = getListPage("_index.md");
  const { frontmatter } = homepage;
  const { banner, brands, features, projects, process, feature_post, blogs } =
    frontmatter;
  const { images, support, facility } = banner || {};
  const { navigation_buttons_homepage } = config;
  return (
    <>
      <SeoMeta {...frontmatter} />
      <section className="section relative z-20 overflow-hidden">
        {/* <section className="section banner relative overflow-hidden before:z-10 after:z-10"> */}
        <div className="container relative z-30">
          <div className="row items-center">
            <div className="lg:col-6">
              <h1
                data-aos="fade-up-sm"
                className="mb-6 text-[35px] sm:text-[50px] xl:text-[35px]"
                dangerouslySetInnerHTML={markdownify(
                  mainBlock.frontmatter.general.title,
                )}
              ></h1>

              <p
                data-aos="fade-up-sm"
                data-aos-delay="150"
                className="mb-6 text-lg"
                dangerouslySetInnerHTML={markdownify(
                  mainBlock.frontmatter.general.content,
                )}
              ></p>
              <h1
                data-aos="fade-up-sm"
                className="mb-6 text-[35px] sm:text-[50px] xl:text-[35px]"
                dangerouslySetInnerHTML={markdownify(
                  mainBlock.frontmatter.general.subtitle,
                )}
              ></h1>

              <p
                data-aos="fade-up-sm"
                data-aos-delay="150"
                className="mb-6 text-lg"
                dangerouslySetInnerHTML={markdownify(
                  mainBlock.frontmatter.general.subcontent,
                )}
              ></p>
            </div>
            <div className="mx-auto max-w-[600px]  lg:col-6 lg:pt-0">
              <div
                data-aos="fade-up-sm"
                className="image-block relative mr-[5.5%] md:mr-6 lg:ml-6"
              >
                <Image
                  width={548}
                  height={564}
                  className="banner-image w-100 h-auto max-w-full"
                  src={mainBlock.frontmatter.general.image.src}
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <TabContainer {...mainBlock.frontmatter.process} />
    </>
  );
};

export default Home;
