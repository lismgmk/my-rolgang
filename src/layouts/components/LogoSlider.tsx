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
        spaceBetween={30} // Уменьшено расстояние между слайдами
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 2000, // Интервал автоплея
          disableOnInteraction: false, // Не отключать автоплей при взаимодействии с слайдером
        }}
        speed={500}
        breakpoints={{
          640: {
            slidesPerView: 1, // Для мобильных устройств 1 слайд
            spaceBetween: 10, // Меньше отступов
          },
          768: {
            slidesPerView: 2, // Для планшетов 2 слайда
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5, // Для больших экранов 5 слайдов
            spaceBetween: 30,
          },
        }}
      >
        <SwiperSlide>
          <Image
            src="/images/logo/1.png"
            alt="Company 1"
            layout="intrinsic" // Используем layout intrinsic для более гибкой подгонки
            width={300} // Ширина изображения больше для лучшего отображения
            height={150} // Высота больше
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/2.png"
            alt="Company 2"
            layout="intrinsic"
            width={300}
            height={150}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/1.png"
            alt="Company 1"
            layout="intrinsic"
            width={300}
            height={150}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/2.png"
            alt="Company 2"
            layout="intrinsic"
            width={300}
            height={150}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/3.png"
            alt="Company 3"
            layout="intrinsic"
            width={300}
            height={150}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/4.png"
            alt="Company 4"
            layout="intrinsic"
            width={300}
            height={150}
            className="w-full h-auto"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/logo/3.png"
            alt="Company 5"
            layout="intrinsic"
            width={300}
            height={150}
            className="w-full h-auto"
          />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default LogoSlider;
