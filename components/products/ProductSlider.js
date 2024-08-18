import React from "react";
import Products from "../../data/products.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";

import "swiper/css/free-mode";
import "swiper/css/pagination";

const ProductSlider = () => {
  const productToShow = Products.slice(10, 18);
  
  return (
    <Swiper
      breakpoints={{
        // when window width is >= 320px
        320: {
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
      freeMode={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      loop={true}
      modules={[Autoplay, FreeMode]}
      className="productSwiper"
    >
      {productToShow.map((items) => {
        return (
          <SwiperSlide className="border border-gray-200" key={items.id}>
            <div className="flex flex-col justify-center items-center p-2">
              <img
                src={items.image}
                alt={items.name}
                className="m-auto w-32 h-32 md:h-32 xl:h-40 md:w-44 p-3 md:p-5"
              />
              <p className="text-xs md:text-sm text-gray-700 py-2">
                {items.name}
              </p>
              <span className="text-2xs md:text-xs text-info800">{`${items.price} تومان`}</span>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductSlider;
