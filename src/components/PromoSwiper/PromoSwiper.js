import React from "react";

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
      </div>
    </div>
  );
}

export default PromoSwiper;
