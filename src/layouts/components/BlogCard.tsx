import config from "@/config/config.json";
import dateFormat from "@/lib/utils/dateFormat";
import { slugify } from "@/lib/utils/textConverter";
import { Post } from "@/types";
import Image from "next/image";
import Link from "next/link";

const BlogCard = ({ data }: { data: Post }) => {
  const { blog_folder } = config.settings;
  const { title, image, date, author, author_avatar } = data.frontmatter;
  return (
    <div data-aos="fade-up-sm" className="md:col-6 lg:col-4">
      <div className="shadow-default group min-h-full overflow-hidden rounded-xl bg-white">
        <Link
          href={`/${blog_folder}/${data.slug}`}
          className="inline-block h-full max-h-[270px] w-full overflow-hidden"
        >
          <Image
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={image}
            width={408}
            height={262}
            alt="author"
          />
        </Link>
        <div className="px-5 pb-12">
          <div className="-mt-[30px] mb-3 flex items-center">
            <Link
              href={`/authors/${slugify(author)}`}
              className="relative z-20 overflow-hidden rounded-full border-[6px] border-white"
              title={author}
            >
              <Image
                src={author_avatar}
                width={40}
                height={40}
                className="h-[40px] w-[40px] object-cover"
                alt={author}
              />
            </Link>
            <Link
              href={`/authors/${slugify(author)}`}
              className="relative z-10 -ml-3 rounded-r-3xl bg-theme-light py-1 pl-6 pr-3 font-primary text-[15px] capitalize text-dark transition-colors hover:text-opacity-70"
            >
              {author}
            </Link>
          </div>
          <h2 className="mb-6 font-primary text-xl font-semibold capitalize text-dark sm:text-2xl">
            <Link
              href={`/${blog_folder}/${data.slug}`}
              className="link-animation relative after:absolute after:inset-0"
            >
              {title}
            </Link>
          </h2>
          <span className="rounded-md bg-theme-light px-3 py-1 text-[14px] font-semibold text-dark">
            {dateFormat(date)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
