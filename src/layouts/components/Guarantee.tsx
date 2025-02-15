"use client";
import { IGuarantee } from "@/types";

const Guarantee = ({
  title,
  subtitle,
  description,
  conclusion,
  additionalText,
}: IGuarantee) => {
  return (
    <section className="section relative z-20 overflow-hidden ">
      <div className="container relative z-30">
        <div className="row">
          {/* Заголовок и подзаголовок */}
          <div className="mx-auto text-center mb-8">
            <h2
              className="mb-4 text-3xl font-semibold"
              data-aos="fade-up-sm"
              data-aos-delay="100"
            >
              {title}
            </h2>
            <p
              className="text-lg mb-6"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              {subtitle}
            </p>
          </div>

          {/* Блок с описанием и заключением */}
          <div className="mx-auto text-center lg:text-left max-w-3xl">
            <p
              className="text-lg mb-6"
              data-aos="fade-up-sm"
              data-aos-delay="150"
            >
              {description}
            </p>
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
