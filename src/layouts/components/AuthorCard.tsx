import Social from "@/components/Social";
import ImageFallback from "@/helpers/ImageFallback";
import { plainify } from "@/lib/utils/textConverter";
import Link from "next/link";

const AuthorCard = ({ data }: { data: any }) => {
  const { slug, frontmatter } = data;
  const { title, image, socials } = frontmatter;

  return (
    <div className="overflow-hidden rounded-xl bg-white px-3 py-8 shadow-sm transition-all duration-300 hover:shadow-md">
      <Link href={`/authors/${slug}`} className="h-full max-h-[900px] w-full">
        {image && (
          <ImageFallback
            className="mx-auto h-[180px] w-[180px] rounded-full object-cover"
            src={image}
            alt={title}
            width={180}
            height={180}
          />
        )}
      </Link>
      <div className="px-5 pt-8 text-center">
        <h3 className="mb-4 text-xl font-semibold text-dark sm:text-2xl">
          <Link href={`/authors/${slug}`}>{title}</Link>
        </h3>
        {plainify(data.content?.slice(0, 25))}...
        <Social
          source={socials}
          className="social-icons-author mt-5 flex flex-wrap items-center justify-center gap-4 font-secondary text-dark"
        />
      </div>
    </div>
  );
};

export default AuthorCard;
