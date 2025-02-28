"use client";

interface IGuarantee {
  title: string;
  subtitle: string;
  description: string;
  conclusion: string;
  additionalText: string;
  cons: { title: string }[];
}

const Guarantee = ({
  title,
  subtitle,
  description,
  conclusion,
  additionalText,
  cons,
}: IGuarantee) => {
  return (
    <section className="section relative z-20 overflow-hidden ">
      <div className="container relative z-30">
        <div className="row">
          <div className="mx-auto text-center mb-8">
            <h2
              className="mb-4 text-3xl font-semibold"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              {title}
            </h2>
         
          </div>

          <div className="mx-auto text-center lg:text-left max-w-3xl">
            <div className="text-lg mb-7">
              <p
                className="text-bold font-bold text-lg mb-3"
                data-aos="fade-up-sm"
                data-aos-delay="150"
              >
                {subtitle}
              </p>
              <ul className="space-y-2 list-none">
                {cons.map((el) => (
                  <li key={el.title} className="flex items-center gap-2 ">
                    <span className="text-lg">-</span>
                    <span>{el.title}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p
              className="font-extrabold text-lg mb-6"
              data-aos="fade-up-sm"
              data-aos-delay="200"
            >
              {conclusion}
            </p>
            <p className="text-lg" data-aos="fade-up-sm" data-aos-delay="250">
              {additionalText}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Guarantee;
