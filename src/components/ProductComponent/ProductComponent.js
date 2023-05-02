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
                  Customize your very own necklace
                  <br />
                  Creating a bracelet which captures your essence.
                  <br />
                  Have fun baby!
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
          <SwiperSlide className="one"></SwiperSlide>
          <SwiperSlide className="two"></SwiperSlide>
          <SwiperSlide className="three"></SwiperSlide>
          <SwiperSlide className="four"></SwiperSlide>
          <SwiperSlide className="five"></SwiperSlide>
          <SwiperSlide className="six"></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
          <SwiperSlide></SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default ProductComponent;
