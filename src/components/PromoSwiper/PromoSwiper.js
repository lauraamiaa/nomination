import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function PromoSwiper() {
  return (
    <div className="c-promo-swiper__outer-wrapper">
      <div className="c-promo-swiper__inner-wrapper">
        <div className="c-promo-swiper__header">
          <h2>DESIGNED BY YOU</h2>
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
          <SwiperSlide>
            <div className="charm-1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-3"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-4"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-5"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-6"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-7"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-8"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-9"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-10"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-11"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-12"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-13"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-14"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-15"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-16"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-17"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-18"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-19"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="charm-20"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default PromoSwiper;
