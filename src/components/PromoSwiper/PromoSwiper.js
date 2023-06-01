import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function PromoSwiper() {
  return (
    <div className="c-promo-swiper__outer-wrapper">
      <div className="c-promo-swiper__inner-wrapper">
        <div className="c-promo-swiper__header">
          <img
            class="c-promo-swiper__heart-emoji"
            src={`${process.env.PUBLIC_URL}/heart.png`}
            alt="heart"
          />
          <h2>DESIGNED BY YOU</h2>
          <img
            class="c-promo-swiper__heart-emoji"
            src={`${process.env.PUBLIC_URL}/heart.png`}
            alt="heart"
          />
        </div>
        <Swiper
          className="c-promo-swiper__collection-swiper"
          spaceBetween={20}
          slidesPerView={4}
        >
          <SwiperSlide className="one"></SwiperSlide>
          <SwiperSlide className="two"></SwiperSlide>
          <SwiperSlide className="three"></SwiperSlide>
          <SwiperSlide className="four"></SwiperSlide>
        </Swiper>
        <Swiper
          className="c-promo-swiper__charm-swiper"
          spaceBetween={5}
          slidesPerView={11}
        >
          <SwiperSlide className="charm-1"></SwiperSlide>
          <SwiperSlide className="charm-2"></SwiperSlide>
          <SwiperSlide className="charm-3"></SwiperSlide>
          <SwiperSlide className="charm-4"></SwiperSlide>
          <SwiperSlide className="charm-5"></SwiperSlide>
          <SwiperSlide className="charm-6"></SwiperSlide>
          <SwiperSlide className="charm-7"></SwiperSlide>
          <SwiperSlide className="charm-8"></SwiperSlide>
          <SwiperSlide className="charm-9"></SwiperSlide>
          <SwiperSlide className="charm-10"></SwiperSlide>
          <SwiperSlide className="charm-11"></SwiperSlide>
          <SwiperSlide className="charm-12"></SwiperSlide>
          <SwiperSlide className="charm-13"></SwiperSlide>
          <SwiperSlide className="charm-14"></SwiperSlide>
          <SwiperSlide className="charm-15"></SwiperSlide>
          <SwiperSlide className="charm-16"></SwiperSlide>
          <SwiperSlide className="charm-17"></SwiperSlide>
          <SwiperSlide className="charm-18"></SwiperSlide>
          <SwiperSlide className="charm-19"></SwiperSlide>
          <SwiperSlide className="charm-20"></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default PromoSwiper;
