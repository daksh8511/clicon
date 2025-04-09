import React from "react";
import './ShopWithCategory.css'
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

import tv from '/assets/slider_assets/tv.png'
import acc from '/assets/slider_assets/acc.png'
import cam from '/assets/slider_assets/cam.png'
import hp from '/assets/slider_assets/hp.png'
import pc from '/assets/slider_assets/pc.png'
import sp from '/assets/slider_assets/sp.png'

const ShopWithCategory = () => {
  return (
    <section>
      <div className="p-5">
        <h2 className="text-center capitalize font-bold text-3xl mb-5">shop with categorys</h2>
        <Swiper
          navigation={true}
          slidesPerView={4}
          loop={true}
          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            0 : {
                slidesPerView : 1
            },
            425 : {
                slidesPerView : 1
            },
            768:{
                slidesPerView : 3
            },
            1080 : {
                slidesPerView : 4
            }
          }}
        >
          <SwiperSlide>
            <img src={tv} className="m-auto" alt="" />
            <h2 className="text-center">TV & Homes</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img className="m-auto" src={acc} alt="" />
            <h2 className="text-center">Accessories</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={cam} className="m-auto" alt="" />
            <h2 className="text-center">Camera & Photo</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={hp} className="m-auto" alt="" />
            <h2 className="text-center">Headphone</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={pc} className="m-auto" alt="" />
            <h2 className="text-center">Computer</h2>
          </SwiperSlide>
          <SwiperSlide>
            <img src={sp} className="m-auto" alt="" />
            <h2 className="text-center">Smartphones</h2>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default ShopWithCategory;
