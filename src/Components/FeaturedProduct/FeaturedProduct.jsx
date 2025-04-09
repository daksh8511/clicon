import React from "react";
import OrangeButton from "../OrangeButton/OrangeButton";

import featuredProduct from "/assets/featuredProduct.jpg";
import RatingStar from "../RatingStar/RatingStar";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const FeaturedProduct = () => {

  const getData = useSelector((state)=>{
    return state.cart.data
  })

  return (
    <section>
      <div className="p-5 block gap-4 min-sm:block min-md:flex">
        <div className="w-5/5 bg-[#F3DE6D] relative min-sm:w-5/5 min-md:w-1/5">
          <div className="p-5 text-center">
            <h4 className="text-[12px] z-10 font-semibold text-red-600">
              COMPUTER & ACCESSORIES
            </h4>
            <h2 className="my-2 font-bold text-gray-900 text-3xl">
              32% Discount
            </h2>
            <p className="mb-2 text-sm text-gray-700">
              For all ellectronics products
            </p>
            <div className="flex gap-2 mb-4 text-center items-center justify-center">
              <span className="text-[12px]">Offers ends in:</span>
              <span className="bg-white font-semibold p-2 text-[10px]">
                ENDS OF CHRISTMAS
              </span>
            </div>
            <div className="px-9">
              <OrangeButton />
            </div>
          </div>
          <div className="w-full">
            <img src={featuredProduct} alt="error" className="relative w-full bottom-0 min-sm:relative min-md:absolute min-md:bottom-0" />
          </div>
        </div>
        <div className="w-5/5 min-sm:w-5/5 min-md:w-4/5">
          <div className="block min-sm:block min-md:flex justify-between items-center mb-5">
            <h2 className="font-bold text-3xl my-5 min-sm:my-5 min-md:my-0">Featured Products</h2>
            <ul className="block min-sm:block min-md:flex gap-10 cursor-pointer">
              <li className="border-b-2 border-orange-500 font-bold">
                All Products
              </li>
              <li>Smartphone</li>
              <li>Laptop</li>
              <li>Headphon</li>
              <li>TV</li>
            </ul>
          </div>
          <div className="otherBox grid grid-cols-1 gap-4 min-sm:grid-cols-1 min-md:grid-cols-4">
            {getData.slice(9, 17).map((item, i) => {
              return (
                <Link to={`/clicon/product_page/${item.id}`} key={i} className="border relative border-gray-300 p-5 group">
                  <img src={item.productImage} alt="" className="mb-3 w-4/5 m-auto" />
                  <RatingStar rating={item.rating} />
                  <h3 className="line-clamp-1 my-2 text-sm">{item.product}</h3>
                  <h3 className="text-indigo-500 font-bold">${item.price}</h3>
                  <div className="absolute w-full h-full bg-black/20 top-0 left-0 opacity-0 group-hover:bottom-0 group-hover:opacity-100 transition-all duration-300">
                    <Link to={`/clicon/product_page/${item.id}`} className="cursor-pointer bg-orange-500 absolute top-30 left-10 text-white px-5 py-2">Check Product</Link>
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

export default FeaturedProduct;
