import React from "react";

const ProductBox = ({image,title, price}) => {
  return (
    <div>
      <div className="border border-gray-300 p-3 flex gap-5 mb-4">
        <div className="w-2/5">
          <img src={image} alt="" />
        </div>
        <div className="w-3/5">
          <h2 className="line-clamp-2 mb-3 text-sm ">
            {title}
          </h2>
          <h4 className="font-bold text-indigo-500">${price}</h4>
        </div>
      </div>
    </div>
  );
};

export default ProductBox;
