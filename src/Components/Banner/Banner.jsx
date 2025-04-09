import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./Banner.css";

import { Pagination, Autoplay } from "swiper/modules";
import FirstSlider from "./SliderPost/FirstSlider";
import OrangeButton from "../OrangeButton/OrangeButton";

import phone from '/assets/phone.png'
import earbuds from '/assets/earbuds.png'
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <section className="-z-0">
      <div className="p-5 gap-3 block min-sm:block min-md:flex">
        <div className="bg-gray-300 w-5/5 p-4 min-sm:w-5/5 min-md:w-3/5">
          <Swiper
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{
              delay: 2500,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <FirstSlider />
            </SwiperSlide>
            <SwiperSlide><FirstSlider /></SwiperSlide>
            <SwiperSlide><FirstSlider /></SwiperSlide>
          </Swiper>
        </div>
        <div className="w-5/5 mt-3 min-sm:w-5/5 min-sm:mt-3 min-md:w-2/5 min-md:mt-0 grid gap-3">
          <Link to={`/clicon/product_page/${30}`} className="minibox flex bg-gray-700 overflow-hidden">
            <div className="left_text ps-15">
                <h4 className="text-[#EBC80C] uppercase mt-8">summer sales</h4>
                <h2 className="capitalize text-3xl min-w-[160px] text-white py-2">new google pixel 6 pro</h2>
                <Link to={`/clicon/product_page/${30}`}><OrangeButton /></Link>
            </div>
            <div className="right_text relative w-[50%] max-sm:hidden ">
                <span className="uppercase absolute right-5 top-9 z-10 px-4 py-2 font-bold bg-[#EBC80C]">29% off</span>
                <img src={phone} className="absolute -right-15 -bottom-20 " alt="" />
            </div>
          </Link>
          <Link to={`/clicon/product_page/${31}`} className="minibox bg-gray-300 block min-sm:block min-md:flex items-center">
            <div className="left_img w-4/4 min-sm:w-4/4 min-md:w-2/4">
                <img src={earbuds} className="m-auto" alt="" />
            </div>
            <div className="right_text w-2/4 m-auto pb-4">
                <h2 className="uppercase min-w-[72px] text-3xl font-bold">xiaomi flipBuds pro</h2>
                <h3 className="text-[#2DA5F3] my-2 text-lg font-bold">$299 USD</h3>
                <Link to={`/clicon/product_page/${31}`}>
                <OrangeButton />
                </Link>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Banner;
