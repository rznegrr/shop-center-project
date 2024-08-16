import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";

import { FreeMode, Autoplay } from "swiper/modules";

export default function BrandSlide() {
  return (
    <>
      <Swiper
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={3}
        spaceBetween={15}
        loop={true}
        modules={[ Autoplay, FreeMode ]}
        breakpoints={{
          // when window width is >= 640px
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          // when window width is >= 768px
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          // when window width is >= 1024px
          1024: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1440: {
            slidesPerView: 6,
            spaceBetween: 40,
          },
        }}
      className="mySwiper"
      >
        <SwiperSlide>
          <img
            src={'./images/bosch.webp'}
            className="w-20 mt-1 md:mt-0 md:w-36 xl:w-44 h-auto rounded-xl cursor-pointer"
            alt="bosch"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={'./images/bost.webp'}
            className="w-20 mt-1 md:mt-0 md:w-36 xl:w-44 h-auto rounded-xl cursor-pointer"
            alt="bost"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={'./images/lg.jpg'}
            className="w-20 mt-1 md:mt-0 md:w-36 xl:w-44 h-auto rounded-xl cursor-pointer"
            alt="lg"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={'./images/devoo.webp'}
            className="w-20 mt-1 md:mt-0 md:w-36 xl:w-44 h-auto rounded-xl cursor-pointer"
            alt="devoo"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={'./images/snowa.webp'}
            className="w-20 mt-1 md:mt-0 md:w-36 xl:w-44 h-auto rounded-xl cursor-pointer"
            alt="snowa"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={'./images/gplus.webp'}
            className="w-20 mt-1 md:mt-0 md:w-36 xl:w-44 h-auto rounded-xl cursor-pointer"
            alt="gplus"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={'./images/sony.jpg'}
            className="w-20 mt-1 md:mt-0 md:w-36 xl:w-44 h-auto rounded-xl cursor-pointer"
            alt="sony"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src={'./images/delmonti.webp'}
            className="w-20 mt-1 md:mt-0 md:w-36 xl:w-44 h-auto rounded-xl cursor-pointer"
            alt="delmonti"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
