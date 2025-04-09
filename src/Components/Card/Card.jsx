import React from "react";
import RatingStar from "../RatingStar/RatingStar";
import { Link } from "react-router-dom";

const Card = ({ myid, pImage, title, rating, price }) => {
  return (
    <Link className="border border-gray-300 p-7" to={`/clicon/product_page/${myid}`}>
      <img src={pImage} alt="image" className="w-52 m-auto" />
      <div className="block min-sm:block min-md:flex my-2 items-center gap-2">
        <RatingStar rating={rating} />
        <h2>{rating}</h2>
      </div>
      <h2 className='line-clamp-2 my-2 text-sm'>{title}</h2>
      <h2 className="font-bold text-indigo-600">${price}</h2>
    </Link>
  );
};

export default Card;
