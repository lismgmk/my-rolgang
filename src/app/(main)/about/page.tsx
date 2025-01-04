import Social from "@/components/Social";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import CounterWrapper from "@/partials/Counter-Wrapper";
import OpenPositions from "@/partials/OpenPositions";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";

import { OpenPosition } from "@/types";
import Image from "next/image";

const About = () => {
  const allPositions: OpenPosition[] = getSinglePage("careers");
  const removeDrafts = allPositions.filter(
    (position) => !position.frontmatter.draft,
  );
  const data = getListPage("about/index.md");
  const careerIndex = getListPage("careers/_index.md");

  const { frontmatter } = data;
  const { title, meta_title, description, image, funfacts, team, goals } =
    frontmatter;

  return (
    <>
      <SeoMeta
        title={title}
        meta_title={meta_title}
        image={image}
        description={description}
      />
      <PageHeader title={title} description={description} />
      <section className="section relative z-20 mt-[-26rem] overflow-hidden">
        <div className="container relative">
          <div data-aos="fade-up-sm" data-aos-delay="150" className="row">
            <div className="md:col-6 lg:translate-x-24">
              <div className="max-w-[670px] rounded-[15px] border-[6px] border-white bg-white sm:border-[12px] lg:rotate-[-4deg]">
                <Image
                  width={608}
                  height={472}
                  className="w-full rounded-[15px] object-cover"
                  src="/images/about-1.jpg"
                  alt="gallery"
                />
              </div>
            </div>
            <div className="md:col-6 lg:-translate-x-24 lg:pt-36">
              <div className="relative z-10 max-w-[670px] rounded-[15px] border-[6px] border-white bg-white sm:border-[12px] lg:rotate-[8deg]">
                <Image
                  width={608}
                  height={472}
                  className="w-full rounded-[15px] object-cover"
                  src="/images/about-2.jpg"
                  alt="gallery"
                />
              </div>
            </div>
          </div>
          <div
            className="pointer-events-none absolute left-[-14%] top-[-7%] -z-10 hidden select-none md:block lg:left-0"
            data-aos="fade-right-sm"
            data-aos-delay="150"
          ></div>
          <div
            className="pointer-events-none absolute right-0 top-0 -z-10 hidden select-none md:block lg:right-[30%]"
            data-aos="fade-left-sm"
            data-aos-delay="150"
          ></div>
          <div
            className="pointer-events-none absolute bottom-[-16%] right-[35%] -z-10 hidden select-none md:block"
            data-aos="fade-down-sm"
            data-aos-delay="150"
          ></div>
        </div>
      </section>

      <section className="section relative z-20">
        <div className="container">
          <div className="row gy-4">
            {goals.map((goal: any, i: any) => {
              return (
                <div key={i} data-aos="fade-left-sm" className="lg:col-6">
                  <span className="mb-6 inline-block font-medium uppercase text-red-400">
                    {goal.subtitle}
                  </span>
                  <div className="border-l-2 border-dark border-opacity-50 py-2 pl-6">
                    <h2 className="font-semibold">{goal.title}</h2>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <CounterWrapper {...funfacts} />

      <section className="section-lg has-bg-shape team-member relative z-20 overflow-hidden">
        <div className="container relative z-20">
          <div className="row items-end justify-between">
            <div data-aos="fade-up-sm" className="lg:col-8 xl:col-6">
              <span
                className="mb-6 inline-block font-medium uppercase text-red-400"
                data-aos="fade-up-sm"
                data-aos-delay="50"
              >
                {team.subtitle}
              </span>
              <div className="mb-8 border-l-2 border-dark border-opacity-50 py-2 pl-6 lg:mb-0">
                <h2
                  className="font-semibold"
                  data-aos="fade-up-sm"
                  data-aos-delay="100"
                >
                  {team.title}
                </h2>
              </div>
            </div>
            <div
              data-aos="fade-right-sm"
              data-aos-delay="150"
              className="col-auto"
            >
              {team.button.enable && (
                <a href={team.button.link} className="btn btn-primary btn-md">
                  {team.button.label}
                </a>
              )}
            </div>
          </div>
          <div className="row gy-4 pt-16">
            {team.members.map((member: any, i: number) => {
              return (
                <div
                  key={i}
                  data-aos="fade-up-sm"
                  data-aos-delay={`${i + "dsd"}`}
                  className="md:col-6 lg:col-4 xl:col-3"
                >
                  <div className="shadow-default overflow-hidden rounded-xl bg-white p-3 pb-0 transition-all duration-300 hover:-translate-y-1">
                    <div className="h-full max-h-[900px] w-full">
                      <Image
                        width={280}
                        height={205}
                        src={member.avatar}
                        alt="Virtual Reality for Training"
                        className="h-full w-full rounded-xl rounded-b-none object-cover"
                      />
                    </div>
                    <div className="px-5 py-8">
                      <h3 className="mb-4 text-xl font-semibold text-dark sm:text-2xl">
                        {member.name}
                      </h3>
                      <p>{member.content}</p>
                      <Social
                        source={member.socials}
                        className="social-icons-author mt-5 flex flex-wrap items-center gap-4 font-secondary text-dark"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div
            data-aos="fade-right-sm"
            className="pointer-events-none absolute right-[-8%] top-[17%] -z-10 hidden select-none lg:block"
          ></div>
          <div
            data-aos="fade-left-sm"
            className="pointer-events-none absolute bottom-[8%] left-[-6%] -z-10 hidden select-none lg:block"
          ></div>
        </div>
      </section>
      <OpenPositions {...careerIndex.frontmatter} removeDrafts={removeDrafts} />
    </>
  );
};

export default About;
