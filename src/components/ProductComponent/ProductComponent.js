import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductComponent() {
  return (
    <div className="c-product__outer-wrapper">
      <div className="c-product__inner-wrapper">
        <div className="c-product__product-container">
          <video autoPlay loop muted className="c-product__bracelet-gif">
            <source
              src={`${process.env.PUBLIC_URL}/bracelet-video.mp4`}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="c-product__content-container">
            <div className="c-product__description-container">
              <div className="c-product__description-text">
                <h3>BRACELET BUILDER</h3>
                <p>
                  Customize your own Composable.
                  <br />
                  Capture your essenze & get creative
                </p>
              </div>
            </div>
            {/* <div className="c-product__button-container">
              <img
                src={`${process.env.PUBLIC_URL}/playbutton_button.png`}
                alt="button icon"
                className="c-product__button-icon"
              />
            </div> */}
          </div>
        </div>
        <Swiper
          className="c-product__charm-swiper"
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

export default ProductComponent;
