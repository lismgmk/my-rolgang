import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";
import config from "@/config/config.json";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import { sortByDate } from "@/lib/utils/sortFunctions";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import TeamMemberShape1 from "@/shapes/team-member-s-1";
import TeamMemberShape2 from "@/shapes/team-member-s-2";
import { Post } from "@/types";
const { blog_folder, pagination } = config.settings;

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams = () => {
  const allPost: Post[] = getSinglePage(blog_folder);
  const allSlug: string[] = allPost.map((item) => item.slug!);
  const totalPages = Math.ceil(allSlug.length / pagination);
  let paths: { page: string }[] = [];

  for (let i = 1; i < totalPages; i++) {
    paths.push({
      page: (i + 1).toString(),
    });
  }

  return paths;
};

// for all regular pages
const Posts = ({ params }: { params: { page: number } }) => {
  const postIndex: Post = getListPage(`${blog_folder}/_index.md`);
  const { title, meta_title, image } = postIndex.frontmatter;
  const posts: Post[] = getSinglePage(blog_folder);
  const sortedPosts = sortByDate(posts);
  const totalPages = Math.ceil(posts.length / pagination);
  const currentPage =
    params.page && !isNaN(Number(params.page)) ? Number(params.page) : 1;
  const indexOfLastPost = currentPage * pagination;
  const indexOfFirstPost = indexOfLastPost - pagination;
  const currentPosts = sortedPosts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <>
      <SeoMeta title={title} meta_title={meta_title} image={image} />
      <PageHeader title={postIndex.frontmatter.title} />
      <section className="section-md relative mt-[-28rem] overflow-hidden md:mt-[-32rem]">
        <div className="container relative z-30">
          <div className="row gy-4">
            {currentPosts.map((post, i) => (
              <BlogCard key={i} data={post} />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={currentPage}
            section={blog_folder}
          />
        </div>

        {/* <!-- Start Bg Shape --> */}
        <div className="pointer-events-none absolute left-0 top-[40%] select-none">
          <TeamMemberShape1 className="text-quaternary" />
        </div>
        <div className="pointer-events-none absolute bottom-[20%] right-[-6%] select-none">
          <TeamMemberShape2 className="text-quinary" />
        </div>
      </section>
    </>
  );
};

export default Posts;
