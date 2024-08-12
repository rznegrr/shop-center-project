import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

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
        // autoplay={{
        //   delay: 4000,
        //   disableOnInteraction: false,
        // }}
        modules={[Autoplay, Pagination]}
      >
        <SwiperSlide>
          <Image
            src="/images/sofa.webp"
            height={300}
            width={1200}
            alt="sofa image slider"
            className="rounded-2xl m-auto h-[150px] md:h-[250px] lg:h-[370px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/refrigerator.webp"
            height={350}
            width={1200}
            alt="refrigrator image slider"
            className="rounded-2xl m-auto h-[150px] md:h-[250px] lg:h-[370px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/washing-machine.webp"
            height={350}
            width={1200}
            alt="washing-machine image slider"
            className="rounded-2xl m-auto h-[150px] md:h-[250px] lg:h-[370px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/images/steamer.webp"
            height={350}
            width={1200}
            alt="steamer image slider"
            className="rounded-2xl m-auto h-[150px] md:h-[250px] lg:h-[370px]"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
