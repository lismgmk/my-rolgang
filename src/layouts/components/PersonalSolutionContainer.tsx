"use client";
import config from "@/config/config.json";
import { IPersonalSolutions } from "@/types";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
const PersonalSolutionContainer = ({
  title,
  question,
  answer,
  content,
  image,
}: IPersonalSolutions) => {
  const [tabIndex, setIndex] = useState(0);
  const onTabChange = (index: number) => {
    console.log("+++");
    setIndex(index);
  };
  const { navigation_buttons } = config;
  console.log(title, question, answer, content, image);
  return (
    <section className="section relative z-20 py-16">
      <div id="personal-solutions" className="absolute -top-5"></div>
      <div className="container relative z-30">
        <div className="row">
          <div className="lg:col-6 flex flex-wrap content-between">
            <h2 data-aos="fade-up-sm" className="mb-6 font-semibold">
              {title}
            </h2>
            <p
              data-aos="fade-up-sm"
              data-aos-delay="150"
              className="mb-6 text-lg "
            >
              {question}
            </p>
            <p
              data-aos="fade-up-sm"
              data-aos-delay="150"
              className="mb-6 text-lg "
            >
              {answer}
            </p>
            <p className="text-lg  leading-relaxed">{content}</p>
            <div className="my-8">
              <Link
                id="target-header"
                href={""}
                className={`btn  btn-outline-primary `}
              >
                Оформить заявку
              </Link>
            </div>
          </div>

          <div className="mx-auto max-w-[600px] xs:py-4 lg:col-6">
            <Image
              width={840}
              height={610}
              src={image}
              alt="feature image"
              className="w-full rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSolutionContainer;
