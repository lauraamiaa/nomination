import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function InstagramComponent() {
  return (
    <div className="c-instagram__outer-wrapper">
      <div className="c-instagram__inner-wrapper">
        <div className="c-instagram__header">
          <h2>JOIN THE FAM @NOMINATIONITALY</h2>
        </div>
        <Swiper
          className="c-instagram__swiper"
          spaceBetween={5}
          slidesPerView={4}
        >
          <SwiperSlide>
            <div className="insta-1"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-2"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-3"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-4"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-5"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-6"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-7"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-8"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-9"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-10"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-11"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-12"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-13"></div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="insta-14"></div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default InstagramComponent;
