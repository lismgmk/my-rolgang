import Social from "@/components/Social";
import Line from "@/components/line";
import { getListPage, getSinglePage } from "@/lib/contentParser";
import CounterWrapper from "@/partials/Counter-Wrapper";
import OpenPositions from "@/partials/OpenPositions";
import PageHeader from "@/partials/PageHeader";
import SeoMeta from "@/partials/SeoMeta";
import AboutShape1 from "@/shapes/about-s-1";
import AboutShape2 from "@/shapes/about-s-2";
import AboutShape3 from "@/shapes/about-s-3";
import TeamMemberShape1 from "@/shapes/team-member-s-1";
import TeamMemberShape2 from "@/shapes/team-member-s-2";
import { About, OpenPosition } from "@/types";
import Image from "next/image";

const About = () => {
  const allPositions: OpenPosition[] = getSinglePage("careers");
  const removeDrafts = allPositions.filter(
    (position) => !position.frontmatter.draft,
  );
  const data: About = getListPage("about/index.md");
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
          {/* <!-- Start Shape background --> */}
          <div
            className="pointer-events-none absolute left-[-14%] top-[-7%] -z-10 hidden select-none md:block lg:left-0"
            data-aos="fade-right-sm"
            data-aos-delay="150"
          >
            <AboutShape1 className="text-tertiary" />
          </div>
          <div
            className="pointer-events-none absolute right-0 top-0 -z-10 hidden select-none md:block lg:right-[30%]"
            data-aos="fade-left-sm"
            data-aos-delay="150"
          >
            <AboutShape2 className="text-quaternary" />
          </div>
          <div
            className="pointer-events-none absolute bottom-[-16%] right-[35%] -z-10 hidden select-none md:block"
            data-aos="fade-down-sm"
            data-aos-delay="150"
          >
            <AboutShape3 className="text-secondary" />
          </div>
          {/* <!-- End background Lines --> */}
        </div>
      </section>
      {/* <!-- End About gallery --> */}

      {/* <!-- About vision --> */}
      <section className="section relative z-20">
        <div className="container">
          <div className="row gy-4">
            {goals.map((goal, i) => {
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
      {/* <!-- End About Vision --> */}
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
            {team.members.map((member, i) => {
              return (
                <div
                  key={i}
                  data-aos="fade-up-sm"
                  data-aos-delay={`${50 + i * 50}`}
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

          {/* <!-- Start Bg Shape --> */}
          <div
            data-aos="fade-right-sm"
            className="pointer-events-none absolute right-[-8%] top-[17%] -z-10 hidden select-none lg:block"
          >
            <TeamMemberShape1 className="text-quaternary" />
          </div>
          <div
            data-aos="fade-left-sm"
            className="pointer-events-none absolute bottom-[8%] left-[-6%] -z-10 hidden select-none lg:block"
          >
            <TeamMemberShape2 className="text-quinary" />
          </div>
          {/* <!-- End Bg Shape --> */}
        </div>

        <Line
          color="bg-line-sky"
          className="line-bg absolute left-0 top-1/2 z-10 flex h-full w-full -translate-y-1/2 justify-between"
        />
      </section>
      {/* <!-- End Team Member Section --> */}
      <OpenPositions {...careerIndex.frontmatter} removeDrafts={removeDrafts} />
    </>
  );
};

export default About;
