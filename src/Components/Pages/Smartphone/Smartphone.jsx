import React from "react";
import { useSelector } from "react-redux";
import Card from "../../Card/Card";

const Smartphone = () => {

  const getData = useSelector((state)=>{
    return state.cart.data
  })

  const fil = getData.filter((item) => {
    return item.category == "phone";
  });
  return (
    <div className="p-5">
        <div className="flex items-center">
          <h4>Sort By : </h4>
          <select name="" id="">
            <option value="popular">Most Popular</option>
            <option value="popular">Price : Low To High</option>
            <option value="popular">Price : High To Low</option>
            <option value="popular">Newest</option>
            <option value="popular">By Rating</option>
          </select>
      </div>
      <div className="grid grid-cols-2 min-sm:grid-cols-2 min-md:grid-cols-3 gap-5 my-6">
        {fil.map((item, i) => {
          return (
            <Card
              key={item.id}
              myid={item.id}
              pImage={item.productImage}
              title={item.product}
              rating={item.rating}
              price={item.price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Smartphone;
