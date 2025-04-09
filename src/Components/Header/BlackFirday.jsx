import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import './Header.css'

const BlackFirday = () => {
  return (
    <section className="container">
      <div className=" bg-gray-900 text-white block min-sm:block min-md:flex justify-between px-5 py-1 items-center">
        <div className="title flex justify-center my-4 min-sm:my-4 min-md:my-0 min-sm:justify-center min-md:justify-start">
            <span className="bg-[#F3DE6D] px-2 -rotate-10 me-2 text-black">Black</span>
            <h2 className="font-bold">Friday</h2>
        </div>
        <div className="discount flex justify-center mb-4 min-sm:mb-4 min-md:mb-0 min-sm:justify-center min-md:justify-start">
            <h2 className="items-center flex gap-2">Up to <span className="text-[#EBC80C] font-bold text-4xl">59%</span>OFF</h2>
        </div>
        <div className="shop_btn flex justify-center mb-5 min-sm:mb-5 min-md:mb-0">
            <button className="flex items-center gap-2 bg-[#EBC80C] text-gray-900 uppercase text-sm font-bold px-4 py-3 rounded cursor-pointer">shop now <FaArrowRightLong /></button>
        </div>
      </div>
    </section>
  );
};

export default BlackFirday;
