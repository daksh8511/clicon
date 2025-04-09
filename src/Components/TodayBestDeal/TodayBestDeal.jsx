import React, { useEffect, useState } from "react";

import { FaStar } from "react-icons/fa";
import { FaRegStarHalfStroke, FaRegStar } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa6";
import DiscountBox from "../DiscountBox/DiscountBox.jsx";
import HotOffer from "../HotOffer/HotOffer.jsx";
import RatingStar from "../RatingStar/RatingStar.jsx";

import "./TodayBestDeal.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const TodayBestDeal = () => {
  const getData = useSelector((state) => {
    return state.cart.data;
  });

  const [hour, setHour] = useState(12);
  const [min, setMin] = useState(60);
  const [sec, setSec] = useState(10);

  const ratingStar = Array.from({ length: 5 }, (ele, i) => {
    let number = i + 0.5;

    return (
      <span key={i}>
        {4.5 >= i + 1 ? (
          <FaStar className="text-[#EBC80C]" />
        ) : 4.5 >= number ? (
          <FaRegStarHalfStroke className="text-[#EBC80C]" />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  useEffect(() => {
    setTimeout(() => {
      setSec(sec - 1);
      if (sec == 0) {
        setMin(min - 1);
        setSec(60);
      }

      if (min == 0) {
        setHour(hour - 1);
        setMin(60);
      }

      if (hour == 0) {
        setHour(12);
      }
    }, 1000);
  }, [sec]);

  return (
    <section>
      <div className="p-5">
        <div className="title block min-sm:block min-md:flex items-center justify-between">
          <div className="items-center gap-5 min-sm:block min-md:flex">
            <h3 className="font-bold text-3xl">Best Deals</h3>
            <h4 className="mt-5">
              Deals ends in{" "}
              <span className="bg-[#F3DE6D] p-2">
                {hour}h : {min}min : {sec}sec
              </span>
            </h4>
          </div>
          <div>
            <span className="flex items-center gap-3 mt-5 capitalize text-[#2DA5F3] cursor-pointer">
              browse all product <FaArrowRight />
            </span>
          </div>
        </div>
        <div className="block mt-5 min-sm:block min-md:flex">
          <Link to={`/clicon/product_page/${getData[0].id}`} className="bigbox w-5/5 min-sm:w-5/5 min-md:w-1/5 border border-gray-300 p-5">
            <div className="discount">
              <DiscountBox discountNumber={32} />
              <HotOffer />
            </div>
            <img src={getData[0].productImage} alt="" />
            <span className="flex my-3">{ratingStar}</span>
            <h2 className="mb-2">{getData[0].product}</h2>
            <div className="flex mb-2 gap-3">
              <del className="text-gray-300">$2000</del>
              <span className="text-[#2DA5F3] font-bold">
                ${getData[0].price}
              </span>
            </div>
            <p className="line-clamp-3 mb-2">{getData[0].description}</p>
            <button className="bg-[#FA8232] mt-4 py-2 px-3 rounded text-white hover:bg-white duration-300 hover:text-[#FA8232] hover:border hover:border-[#FA8232] cursor-pointer">
              Check Now
            </button>
          </Link>
          <div className="smallbox w-5/5 grid grid-cols-1 min-sm:w-5/5 min-md:w-4/5 min-sm:grid-cols-1 min-md:grid-cols-4">
            {getData.slice(1, 9).map((item, i) => {
              return (
                <Link
                  key={i}
                  to={`/clicon/product_page/${item.id}`}
                  className="minibox border relative border-gray-300 p-5 group"
                >
                  <img src={item.productImage} alt="" />
                  <span>{<RatingStar rating={item.rating} />}</span>
                  <h4 className="line-clamp-2 my-2">{item.product}</h4>
                  <div className="absolute h-full w-full flex bg-black/40 bottom-0 left-0 group-hover:bottom-0 transition-all duration-300 opacity-0 group-hover:opacity-100">
                    <Link to={`/clicon/product_page/${item.id}`} className="cursor-pointer bg-orange-500 absolute top-40 min-sm:top-40 min-md:top- left-20 text-white px-5 py-2">Check Now</Link>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TodayBestDeal;
