import AuthorCard from "@/components/AuthorCard";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { Author } from "@/types";

const Authors = () => {
  const authorIndex: Author = getListPage("authors/_index.md");
  const authors: Author[] = getSinglePage("authors");
  const { title, meta_title, description, image } = authorIndex.frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />

      <section className="section-md mt-[-28rem] md:mt-[-32rem]">
        <div className="container relative z-40">
          <div className="row gy-5">
            {authors.map((author, i) => (
              <div
                key={i}
                data-aos="fade-up-sm"
                className="md:col-6 lg:col-4 xl:col-3"
              >
                <AuthorCard data={author} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Authors;
