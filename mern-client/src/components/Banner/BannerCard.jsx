import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

import "./BannerCard.css";

// import required modules
import { EffectCards } from "swiper/modules";

const BannerCard = () => {
  return (
    <div className="banner">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692280214i/127305940.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1693860112i/127305658._SX300_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1693998268i/150260819._SX300_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1692046949i/127306119._SX300_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1687773249i/157020056._SX300_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1711398419i/127279000._SY180_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1684205823i/126918658._SY180_.jpg"
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1703802748i/195790649._SY180_.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCard;
