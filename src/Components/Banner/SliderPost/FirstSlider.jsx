import React from "react";
import OrangeButton from "../../OrangeButton/OrangeButton";

import console from '/assets/console.png'
import { Link } from "react-router-dom";

const FirstSlider = () => {
  return (
    <Link to={`/clicon/product_page/${29}`} className="block min-sm:block min-md:flex items-center">
      <div className="left_side text-center w-full min-sm:w-full min-sm:text-center min-md:w-[50%] min-md:text-left">
        <h2 className="uppercase text-[12px] text-[#2DA5F3] mb-1">
          the best place to play
        </h2>
        <h2 className="text-4xl font-bold mb-3">Xbox Console</h2>
        <p className="max-w-[356px] mb-4">
          Save up to 50% on select Xbox games. Get 3 months of PC Game Pass for
          $2 USD.
        </p>
        <Link to={`/clicon/product_page/${29}`}><OrangeButton /></Link>
      </div>
      <div className="right_side relative w-full min-sm:w-full min-md:w-[50%]">
        <span className="absolute right-0 top-4 bg-[#2DA5F3] text-white font-semibold text-xl rounded-full px-5 py-7">
          $299
        </span>
        <img src={console} alt="" />
      </div>
    </Link>
  );
};

export default FirstSlider;
