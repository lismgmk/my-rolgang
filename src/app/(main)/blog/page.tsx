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

export type blog = {
  frontmatter: {
    title: string;
    date: Date;
    image: string;
    author: string;
    author_avatar: string;
    categories: string[];
    tags: string[];
    meta_title?: string;
    draft: boolean;
  };
  content: string;
};

const Post = () => {
  const { blog_folder } = config.settings;
  const postIndex = getListPage(`${blog_folder}/_index.md`);
  const posts: Post[] = getSinglePage(`${blog_folder}`);
  const totalPages: number = Math.ceil(
    posts.length / config.settings.pagination,
  );
  const sortedPosts = sortByDate(posts);
  const currentPosts = sortedPosts.slice(0, config.settings.pagination);
  const { title, meta_title, description, image } = postIndex.frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        image={image}
        description={description}
      />
      <PageHeader title={title} />
      <section className="section-md relative mt-[-28rem] overflow-hidden md:mt-[-32rem]">
        <div className="container relative z-30">
          <div className="row gy-4">
            {currentPosts.map((post, i) => (
              <BlogCard key={i} data={post} />
            ))}
          </div>
          <Pagination
            totalPages={totalPages}
            currentPage={1}
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

export default Post;
