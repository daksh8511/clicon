import React from "react";

import "./AllCategory.css";

import { IoIosArrowDown } from "react-icons/io";
import { Link } from "react-router-dom";

const AllCategory = () => {
  return (
    <div className="category relative bg-gray-200 p-2 z-10 duration-200 hover:bg-[#FA8232] hover:text-white cursor-pointer">
      <div className="title flex items-center gap-2">
        <h2>All Category</h2>
        <IoIosArrowDown className="arr duration-200" />
      </div>
      <ul className="allcategories hidden absolute top-10 left-0 bg-white text-black *:p-2 *:hover:bg-gray-300">
        <li>
          <Link to={`/clicon/all`}>All</Link>
        </li>
        <li>
          <Link to={`/clicon/computer_laptop`}>Computer & Laptop</Link>
        </li>
        <li className="w-full">
          <Link className="w-full" to={`/clicon/smartphone`}>
            Smartphone
          </Link>
        </li>
        <li>
          <Link className="w-full" to={`/clicon/headphone`}>
            Headphone
          </Link>
        </li>
        <li>
          <Link className="w-full" to={`/clicon/gaming_console`}>
            Gaming Console
          </Link>
        </li>
        <li>
          <Link className="w-full" to={`/clicon/camera`}>
            Camera
          </Link>
        </li>
        <li>
          <Link className="w-full" to={`/clicon/tv_home_applience`}>
            TV & Home Applience
          </Link>
        </li>
        <li>
          <Link className="w-full" to={`/clicon/smartwatch`}>
            Smartwatch
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AllCategory;
