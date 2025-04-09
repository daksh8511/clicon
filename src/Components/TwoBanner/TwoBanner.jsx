import React from "react";
import OrangeButton from "../OrangeButton/OrangeButton";
import speaker from "/assets/speaker.png";
import smartphone from "/assets/smartphone.png";
import { Link } from "react-router-dom";

const TwoBanner = () => {
  return (
    <section>
      <div className="p-5 grid grid-cols-1 gap-4 min-sm:grid-cols-1 min-md:grid-cols-2">
        <Link to={`/clicon/product_page/${32}`} className=" bg-gray-300 p-4 block min-sm:block min-md:flex justify-around items-center">
          <div className="left mb-5 min-sm:mb-5 min-sm:text-center min-md:text-left min-md:mb-0">
            <h4 className="bg-indigo-500 w-2/5 py-1 text-center uppercase text-white text-sm">
              intoduction
            </h4>
            <h2 className="my-3 text-3xl font-bold">New Apple Homepod Mini</h2>
            <p className="mb-4">
              Jam-packed with innovation, HomePod mini delivers unexpectedly.
            </p>
            <Link to={`/clicon/product_page/${32}`}>
              <OrangeButton />
            </Link>
          </div>
          <div className="right flex justify-center min-sm:flex min-sm:justify-center min-md:block">
            <img src={speaker} alt="" />
          </div>
        </Link>
        <Link to={`/clicon/product_page/${33}`} className="bg-gray-900 p-4 block min-sm:block min-md:flex justify-around items-center">
          <div className="left mb-5 min-sm:mb-5 min-md:mb-0 min-sm:text-center min-md:text-left">
            <h4 className="bg-yellow-400 w-3/5 py-1 text-center uppercase text-black text-sm">
              intoduction new
            </h4>
            <h2 className="my-3 text-3xl font-bold text-white">
              Xiaomi Mi 11 Ultra 12GB+256GB
            </h2>
            <p className="mb-4 text-white">
              *Data provided by internal laboratories. Industry measurment.
            </p>
            <Link to={`/clicon/product_page/${33}`}><OrangeButton /></Link>
          </div>
          <div className="right flex min-sm:flex min-sm:justify-center min-md:justify-start">
            <img src={smartphone} alt="" />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default TwoBanner;
