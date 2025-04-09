import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { FreeMode, Navigation, Thumbs } from "swiper/modules";
import { useParams } from "react-router-dom";
import RatingStar from "../../RatingStar/RatingStar";
import Error from "../Error/Error";

import data from "../../../../public/data/AllData";

import { addCart } from "../../../slices/cart";
import { useDispatch, useSelector } from "react-redux";

const ProductPage = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const { id } = useParams();

  const [cartProduct, setCartProduct] = useState([]);

  const filterData = data.filter((item) => item.id == id);
  const arrayData = filterData.map((item) => item.productImage);

  const dispatch = useDispatch();

  const addCartFunction = (data) => {
    dispatch(addCart(data.payload));
    setCartProduct([...cartProduct, data.payload]);
  };

  useEffect(() => {
    if (cartProduct.length > 0) {
      localStorage.setItem("item", JSON.stringify(cartProduct));
    }
  }, [cartProduct]);

  if (id > data.length) {
    return <Error />;
  }

  return (
    <section>
      <div className="p-5 ">
        <div className="grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-2 gap-4">
          <div className="img-box">
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              loop={true}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              {arrayData[0].map((item, i) => {
                return (
                  <SwiperSlide>
                    <img src={item} className="m-auto" />
                  </SwiperSlide>
                );
              })}
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              loop={true}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              {arrayData[0].map((item, i) => {
                return (
                  <SwiperSlide>
                    <img src={item} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
          <div className="details">
            <div className="flex items-center gap-2">
              <RatingStar rating={filterData[0].rating} />
              <h2>{filterData[0].rating}</h2>
            </div>
            <h2 className="font-bold text-2xl my-2">{filterData[0].product}</h2>
            <h4 className="text-indigo-500 font-bold text-2xl">
              Price : ${filterData[0].price}
            </h4>
            <div className="color my-4">
              <h3>Color : </h3>
              <div className="colors grid grid-cols-3 min-sm:grid-cols-3 min-md:flex gap-3 *:border *:px-3">
                {filterData[0].color.map((item, i) => {
                  return (
                    <h4
                      key={item.id}
                      className="cursor-pointer hover:bg-black hover:text-white"
                    >
                      {item}
                    </h4>
                  );
                })}
              </div>
            </div>
            <div className="quantity my-6">
              <h2 className="font-bold">Quantity</h2>
              <div className="flex justify-between border items-center border-gray-300 w-[150px] p-3">
                {filterData[0].quantity == 0 ? (
                  <h4 className="text-red-600">Not Available</h4>
                ) : (
                  <>
                    <button className="text-3xl cursor-pointer">-</button>

                    <h3>{filterData[0].quantity}</h3>

                    <button className="text-3xl cursor-pointer">+</button>
                  </>
                )}
              </div>
            </div>
            {filterData[0].quantity == 0 ? (
              ""
            ) : (
              <>
                <button
                  onClick={() => addCartFunction(addCart(filterData[0]))}
                  className="block border border-orange-500 text-orange-500 mb-5 py-2 px-5 cursor-pointer"
                >
                  Add To Cart
                </button>
                <button className="bg-orange-500 px-8 cursor-pointer hover:bg-white hover:text-orange-500 hover:border-orange-500 hover:border py-2 text-white">
                  Buy Now
                </button>
              </>
            )}
          </div>
        </div>
        <div className="border border-gray-300 p-5 mt-24">
          <h2 className="font-bold mb-3">Description : </h2>
          <p>{filterData[0].description}</p>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
