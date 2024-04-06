import MDXContent from "@/helpers/MDXContent";
import { getSinglePage } from "@/lib/contentParser";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import { RegularPage } from "@/types";

// remove dynamicParams
export const dynamicParams = false;

// generate static params
export const generateStaticParams = () => {
  const getRegularPages = getSinglePage("pages");

  const filterRegularPages = getRegularPages.filter(
    (page: RegularPage) => !page.frontmatter.layout,
  );

  const regularPages = filterRegularPages.map((page: RegularPage) => ({
    regular: page.slug,
  }));

  return regularPages;
};

// for all regular pages
const RegularPages = ({ params }: { params: { regular: string } }) => {
  const regularData = getSinglePage("pages");
  const data = regularData.filter(
    (page: RegularPage) => page.slug === params.regular,
  )[0];
  const { frontmatter, content } = data;
  const { title, meta_title, description, image } = frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        description={description}
        image={image}
      />
      <PageHeader title={title} />
      <section className="section-md relative z-20 mt-[-28rem] md:mt-[-32rem]">
        <div className="container">
          <div className="content shadow-default rounded-2xl bg-white px-8 py-8 sm:px-14 sm:py-14 lg:px-20 lg:py-16">
            <MDXContent content={content} />
          </div>
        </div>
      </section>
    </>
  );
};

export default RegularPages;
