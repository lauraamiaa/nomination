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
          <SwiperSlide className="one"></SwiperSlide>
          <SwiperSlide className="two"></SwiperSlide>
          <SwiperSlide className="three"></SwiperSlide>
          <SwiperSlide className="four"></SwiperSlide>
          <SwiperSlide className="five"></SwiperSlide>
          <SwiperSlide className="six"></SwiperSlide>
          <SwiperSlide className="seven"></SwiperSlide>
          <SwiperSlide className="eight"></SwiperSlide>
          <SwiperSlide className="nine"></SwiperSlide>
          <SwiperSlide className="ten"></SwiperSlide>
          <SwiperSlide className="eleven"></SwiperSlide>
          <SwiperSlide className="twelve"></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default PromoSwiper;
