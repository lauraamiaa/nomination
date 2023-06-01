import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductComponent() {
  return (
    <div className="c-product__outer-wrapper">
      <div className="c-product__inner-wrapper">
        <div className="c-product__product-container">
          <div className="c-product__bracelet-container">
            <img
              src={`${process.env.PUBLIC_URL}/bracelet.gif`}
              alt="bracelet gif"
              className="c-product__bracelet-gif"
            />
          </div>
          <div className="c-product__content-container">
            <div className="c-product__description-container">
              <div className="c-product__description-text">
                <h3>BRACELET BUILDER</h3>
                <p>
                  Customize your very own Composable
                  <br />
                  Capture your essence & get creative
                </p>
              </div>
            </div>
            <div className="c-product__button-container">
              {/* <img
                src={`${process.env.PUBLIC_URL}/playbutton_button.png`}
                alt="button icon"
                className="c-product__button-icon"
              /> */}
            </div>
          </div>
        </div>
        <Swiper
          className="c-product__charm-swiper"
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

export default ProductComponent;
