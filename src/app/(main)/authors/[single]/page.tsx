import BlogCard from "@/components/BlogCard";
import Social from "@/components/Social";
import Line from "@/components/line";
import config from "@/config/config.json";
import ImageFallback from "@/helpers/ImageFallback";
import { getSinglePage } from "@/lib/contentParser";
import { markdownify, slugify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import LoginShape1 from "@/shapes/login-s-1";
import LoginShape2 from "@/shapes/login-s-2";
import LoginShape3 from "@/shapes/login-s-3";
import LoginShape4 from "@/shapes/login-s-4";
import { Author, Post } from "@/types";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single?: string }[] = () => {
  const authors: Author[] = getSinglePage("authors");

  const paths = authors.map((author) => ({
    single: author.slug,
  }));

  return paths;
};

const AuthorSingle = ({ params }: { params: { single: string } }) => {
  const authors: Author[] = getSinglePage("authors");
  const author = authors.filter((page) => page.slug === params.single)[0];
  const { frontmatter, content } = author;
  const { title, socials, meta_title, description, image } = frontmatter;
  const { blog_folder } = config.settings;
  const posts: Post[] = getSinglePage(blog_folder);
  const postFilterByAuthor: Post[] = posts.filter(
    (post) => slugify(post.frontmatter.author) === slugify(title),
  );

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <section className="section page-header author-single relative overflow-hidden after:z-10">
        <Line className="line-bg absolute z-20" color="bg-line-yellow" />
        <div className="container relative z-30">
          <div className="row">
            <div className="col-12 relative mx-auto">
              <div className="shadow-default rounded-2xl bg-white px-6 py-10 sm:px-11">
                <div className="row gy-4">
                  <div
                    data-aos="fade-up-sm"
                    className="border-b border-border border-opacity-50 pb-8 lg:col-4 xl:col-3 lg:border-b-0 lg:border-r lg:border-border lg:pb-0"
                  >
                    <div className="mb-6 h-fit w-full">
                      {image && (
                        <ImageFallback
                          className="mx-auto h-[180px] w-[180px] rounded-full object-cover"
                          src={image}
                          alt={title}
                          width={180}
                          height={180}
                        />
                      )}
                    </div>
                    <div className="px-5 text-center">
                      <h3
                        className="mb-4 text-xl font-semibold text-dark sm:text-2xl"
                        dangerouslySetInnerHTML={markdownify(title)}
                      ></h3>
                      <Social
                        source={socials}
                        className="social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark"
                      />
                    </div>
                  </div>
                  <div
                    data-aos="fade-up-sm"
                    data-aos-delay="100"
                    className="lg:col-8 xl:col-9"
                  >
                    <div
                      className="content lg:px-10"
                      dangerouslySetInnerHTML={markdownify(content!)}
                    ></div>
                  </div>
                </div>
              </div>

              {/* <!-- Start Shape background --> */}
              <div
                data-aos="fade-up-sm"
                className="pointer-events-none absolute -top-6 left-[-2%] -z-10 select-none lg:top-[-15%]"
              >
                <LoginShape1 className="w-[150px] text-quaternary" />
              </div>
              <div
                data-aos="fade-up-sm"
                className="pointer-events-none absolute -top-8 right-[-4%] -z-10 select-none lg:-top-12"
              >
                <LoginShape2 className="w-[150px] text-quinary" />
              </div>
              <div
                data-aos="fade-up-sm"
                className="pointer-events-none absolute -bottom-8 left-[-4%] -z-10 select-none lg:bottom-[-22%]"
              >
                <LoginShape3 className="w-[150px] text-tertiary" />
              </div>
              <div
                data-aos="fade-up-sm"
                className="pointer-events-none absolute -bottom-8 right-[-3%] -z-10 select-none lg:bottom-[-32%]"
              >
                <LoginShape4 className="w-[150px] text-secondary" />
              </div>
              {/* <!-- End background Lines --> */}
            </div>
          </div>
        </div>
        {/* <!-- End Main Content --> */}
      </section>

      <section className="lg:section pb-20 pt-10 lg:pt-0">
        <div className="container relative z-30">
          <div className="row pb-12">
            <div className="col-12 text-center">
              <h2 className="font-semibold" data-aos="fade-up-sm">
                <span className="text-zinc-500 text-opacity-70">
                  Recent Post By:{" "}
                </span>
                {title}
              </h2>
            </div>
          </div>

          <div className="row gy-4 justify-center">
            {postFilterByAuthor.map((post, i) => (
              <BlogCard key={i} data={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AuthorSingle;
