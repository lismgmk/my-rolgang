"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";

const LogoSlider = () => {
  const partnerLogos = [
    {
      src: "/images/brands/10belrosmash.png",
      alt: "Belrosmash",
      width: 300,
      height: 150,
    },
    {
      src: "/images/brands/12ak_skidelskii.png",
      alt: "AK Skidelskii",
      width: 300,
      height: 150,
    },
    { src: "/images/brands/2mmz.png", alt: "MMZ", width: 300, height: 150 },
    {
      src: "/images/brands/5national_airport.png",
      alt: "National Airport",
      width: 300,
      height: 150,
    },
    {
      src: "/images/brands/8svetohim.png",
      alt: "Svetohim",
      width: 300,
      height: 150,
    },
    {
      src: "/images/brands/11ak_dzerzinski.png",
      alt: "AK Dzerzinski",
      width: 300,
      height: 150,
    },
    {
      src: "/images/brands/1grodno-azot.png",
      alt: "Grodno Azot",
      width: 300,
      height: 150,
    },
    {
      src: "/images/brands/3alivaria.jpg",
      alt: "Alivaria",
      width: 300,
      height: 150,
    },
    { src: "/images/brands/6mgwf.png", alt: "MGWF", width: 300, height: 150 },
    {
      src: "/images/brands/9euroopt.png",
      alt: "Euroopt",
      width: 300,
      height: 150,
    },
    {
      src: "/images/brands/5neman.svg",
      alt: "Neman",
      width: 300,
      height: 150,
    },
    {
      src: "/images/brands/7belsolod.svg",
      alt: "Belsolod",
      width: 300,
      height: 150,
    },
    {
      src: "/images/brands/4beltamoz.png",
      alt: "Beltamoz",
      width: 300,
      height: 200,
    },
  ];

  return (
    <section className="py-12">
      <h2 className="text-3xl text-center mb-8">Наши партнёры</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={30}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        speed={500}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 10,
            spaceBetween: 80,
          },
        }}
      >
        {partnerLogos.map((logo, index) => (
          <SwiperSlide key={index}>
            <div className="w-50 h-40 flex items-center justify-center">
              <Image
                src={logo.src}
                alt={logo.alt}
                layout="inherit"
                width={logo.width}
                height={logo.height}
                className="w-full h-auto"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default LogoSlider;
