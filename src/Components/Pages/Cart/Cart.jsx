import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { deleteCart } from "../../../slices/cart";
import { Link } from "react-router-dom";

const Cart = () => {
  const myproducts = JSON.parse(localStorage.getItem('item'))

  const getData = useSelector((state) => {
    return state.cart.inCart;
  });

  let totalPrice = 0

  getData.map((product)=>{
    totalPrice += product.price
  })

  const dispatch = useDispatch();

  const removeProduct = (item) => {
    dispatch(deleteCart(item.payload))
  };

  return (
    <div>
      <div className="block min-sm:block min-md:flex">
        <div className="left w-5/5 min-sm:w-5/5 min-md:w-3/5 p-5">
          <div className="flex justify-between border-b border-gray-500 pb-4">
            <h2 className="font-bold text-2xl">Shopping Cart</h2>
            <h3>{getData.length}</h3>
          </div>
          <div className="box grid grid-cols-1 gap-5">
            {
              myproducts == null ? <Link to={`/clicon/all`}>Add Some Product</Link> :myproducts.map((item, i) => {
                return (
                  <div className="minibox flex gap-4 justify-between border-b border-gray-300 py-3">
                    <div className="flex items-center gap-2">
                      <img className="w-20" src={item.productImage[0]} alt="" />
                      <h4>{item.product}</h4>
                    </div>
                    <div className="flex gap-2">
                      <button className="bg-gray-300 p-4 cursor-pointer">
                        -
                      </button>
                      <input
                        type="number"
                        className="w-10 text-center"
                        value={0}
                      />
                      <button className="bg-gray-300 p-4 cursor-pointer">
                        +
                      </button>
                    </div>
                    <div className="flex items-center gap-4">
                      <h4>${getData.price}</h4>
                      <button
                        onClick={() => removeProduct(deleteCart(item.id))}
                        className="text-white bg-red-600 p-2 cursor-pointer"
                      >
                        X
                      </button>
                    </div>
                  </div>
                );
              })
            }
          </div>
        </div>
        <div className="right w-5/5 min-sm:w-5/5 min-md:w-2/5 bg-gray-200 p-5">
          <h2 className="font-bold text-2xl border-b border-gray-500 pb-4">
            Summary
          </h2>
          <div className="border-b border-gray-500 py-5">
            <h2 className="flex justify-between mb-2">Total : <span className="text-indigo-500 font-bold">$ {totalPrice}</span></h2>
            <h2 className="flex justify-between">Shipping : <span>Gratis</span></h2>
          </div>
          <button className="mt-5 text-center w-full bg-[#EBC80C] text-white font-bold py-2 cursor-pointer hover:bg-yellow-500">
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
