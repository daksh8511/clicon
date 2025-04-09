import React from 'react';
import { FaStar, FaRegStar } from "react-icons/fa";
import { FaRegStarHalfStroke } from "react-icons/fa6";

const RatingStar = ({ rating }) => {
  const ratingStar = Array.from({ length: 5 }, (ele, i) => {
    const starValue = i + 1;
    
    if (rating >= starValue) {
      return <FaStar className='text-[#EBC80C]' key={i} />;
    }
    if (rating >= starValue - 0.5) {
      return <FaRegStarHalfStroke className='text-[#EBC80C]' key={i} />; 
    }
    
    return <FaRegStar className='text-[#EBC80C]' key={i} />;
  });

  return <div className='flex'>{ratingStar}</div>;
};

export default RatingStar;
