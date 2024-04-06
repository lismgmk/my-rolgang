import BlogCard from "@/components/BlogCard";
import Disqus from "@/components/Disqus";
import Line from "@/components/line";
import config from "@/config/config.json";
import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import dateFormat from "@/lib/utils/dateFormat";
import similerItems from "@/lib/utils/similarItems";
import { markdownify, slugify } from "@/lib/utils/textConverter";
import SeoMeta from "@/partials/SeoMeta";
import BlogShape2 from "@/shapes/blog-s-2";
import HeaderShape1 from "@/shapes/header-s-1";
import HeaderShape2 from "@/shapes/header-s-2";
import TeamMemberShape2 from "@/shapes/team-member-s-2";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";
const { blog_folder } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams: () => { single: string }[] = () => {
  const posts: Post[] = getSinglePage(blog_folder);

  const paths = posts.map((post) => ({
    single: post.slug!,
  }));

  return paths;
};

// for all regular pages
const Posts = ({ params }: { params: { single: string } }) => {
  const { blog_folder } = config.settings;
  const posts: Post[] = getSinglePage(`${blog_folder}`);
  const post = posts.filter((page) => page.slug === params.single)[0];
  const similarPosts = similerItems(post, posts, post.slug ?? "");
  const { title, meta_title, author, author_avatar, date, image, tags } =
    post.frontmatter || {};

  return (
    <>
      <SeoMeta title={title} meta_title={meta_title} />
      <section className="section page-header blog-single relative overflow-hidden pb-0 after:z-10">
        <div className="container relative z-40">
          <div className="row">
            {image && (
              <div className="col-12" data-aos="fade-up-sm">
                <Image
                  className="h-[350px] w-full rounded-t-xl object-cover md:h-[450px]"
                  src="/images/articles/featured-image.jpg"
                  alt="featured-image"
                  width={1272}
                  height={450}
                />
              </div>
            )}
          </div>
        </div>
        <Line className="line-bg absolute z-20" color="bg-line-yellow" />
        <div
          className="pointer-events-none absolute left-0 top-[5%] z-30 hidden select-none lg:block"
          data-aos="fade-up-sm"
        >
          <HeaderShape1 className="text-secondary" />
        </div>
        <div
          className="pointer-events-none absolute right-0 top-[25%] z-30 hidden select-none lg:block"
          data-aos="fade-up-sm"
        >
          <HeaderShape2 className="text-quinary" />
        </div>
      </section>

      <section className="section-sm relative overflow-hidden pt-6 md:pt-10">
        <div className="container relative z-30">
          <article className="row">
            <div className="mx-auto sm:col-10" data-aos="fade-up-sm">
              <h1
                className="h2 mb-6 font-secondary text-2xl capitalize !leading-normal text-dark md:text-3xl lg:text-4xl xl:text-5xl"
                dangerouslySetInnerHTML={markdownify(title)}
              ></h1>
              <div className="mb-6 flex flex-wrap items-center gap-x-12 gap-y-6">
                <div className="flex items-center">
                  <Link
                    title="author image"
                    href={`/authors/${slugify(author)}`}
                    className="relative z-20 overflow-hidden rounded-full border-[6px] border-zinc-100"
                  >
                    <Image
                      src={author_avatar}
                      className="h-[70px] w-[70px] object-cover"
                      width={70}
                      height={70}
                      alt="Daniel Mitchell"
                    />
                  </Link>
                  <Link
                    href={`/authors/${slugify(author)}`}
                    className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
                  >
                    {author}
                  </Link>
                </div>
                <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
                  {dateFormat(date)}
                </span>
              </div>
            </div>
            <div
              className="sm:col-10 sm:mx-auto"
              data-aos="fade-up-sm"
              data-aos-delay="50"
            >
              <div className="content">
                <MDXContent content={post.content} />
              </div>

              <Disqus className="mt-20" />
            </div>
          </article>
        </div>

        <div className="pointer-events-none absolute left-0 top-[40%] select-none">
          <BlogShape2 className="text-quaternary" />
        </div>
        <div className="pointer-events-none absolute bottom-[20%] right-[-6%] select-none">
          <TeamMemberShape2 className="text-quinary" />
        </div>
      </section>

      <section className="section articles relative z-20 pb-20 after:-z-10 md:pb-40">
        <div className="container relative z-30">
          <div className="row items-end justify-between pb-12">
            <div className="lg:col-8 xl:col-6">
              <h2 className="font-semibold" data-aos="fade-up-sm">
                Related Posts
              </h2>
            </div>
          </div>
          <div className="row gy-4">
            {similarPosts.map((post, i) => (
              <BlogCard key={i} data={post} />
            ))}
          </div>
        </div>
        <Line className="line-bg absolute z-20" color="bg-line-sky" />
      </section>
    </>
  );
};

export default Posts;
