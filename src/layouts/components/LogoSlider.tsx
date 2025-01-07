"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image"; // Импортируем компонент Image
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
const LogoSlider = () => {
  return (
    <section className="py-12">
      <h2 className="text-3xl text-center mb-8">Наши партнёры</h2>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={50}
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2000, // Интервал автоплея
          disableOnInteraction: false, // Не отключать автоплей при взаимодействии с слайдером
        }}
        speed={500}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <Image
            src="/images/logo/1.png"
            alt="Company 1"
            width={200} // Задайте подходящую ширину
            height={100} // Задайте подходящую высоту
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/2.png"
            alt="Company 2"
            width={200}
            height={100}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/1.png"
            alt="Company 1"
            width={200} // Задайте подходящую ширину
            height={100} // Задайте подходящую высоту
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/2.png"
            alt="Company 2"
            width={200}
            height={100}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/3.png"
            alt="Company 3"
            width={200}
            height={100}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/4.png"
            alt="Company 4"
            width={200}
            height={100}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/3.png"
            alt="Company 5"
            width={200}
            height={100}
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default LogoSlider;
