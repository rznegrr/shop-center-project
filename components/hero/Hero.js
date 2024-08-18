import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";

export default function Hero() {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        effect={"fade"}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        className="mySwiper container"
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <img
            src="./images/sofa.webp"
            alt="sofa image slider"
            className="rounded-2xl m-auto h-[110px] md:h-[250px] lg:h-[350px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/refrigerator.webp"
            alt="refrigrator image slider"
            className="rounded-2xl m-auto h-[110px] md:h-[250px] lg:h-[350px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/washing-machine.webp"
            alt="washing-machine image slider"
            className="rounded-2xl m-auto h-[110px] md:h-[250px] lg:h-[350px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/steamer.webp"
            alt="steamer image slider"
            className="rounded-2xl m-auto h-[110px] md:h-[250px] lg:h-[350px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="./images/slider4.webp"
            alt="steamer image slider"
            className="rounded-2xl m-auto h-[110px] md:h-[250px] lg:h-[350px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
