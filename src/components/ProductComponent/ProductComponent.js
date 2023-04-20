import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProductComponent() {
  return (
    <div className="c-product__outer-wrapper">
      <div className="c-product__inner-wrapper">
        <div className="c-product__product-container">
          <div className="c-product__bracelet-container"></div>
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
            <div className="c-product__button-container"></div>
          </div>
        </div>
        <div className="c-product__charm-swiper">
          <Swiper spaceBetween={0} slidesPerView={11}>
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
            <SwiperSlide>Slide 5</SwiperSlide>
            <SwiperSlide>Slide 6</SwiperSlide>
            <SwiperSlide>Slide 7</SwiperSlide>
            <SwiperSlide>Slide 8</SwiperSlide>
            <SwiperSlide>Slide 9</SwiperSlide>
            <SwiperSlide>Slide 10</SwiperSlide>
            <SwiperSlide>Slide 11</SwiperSlide>
            <SwiperSlide>Slide 12</SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
}

export default ProductComponent;
