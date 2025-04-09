import React from "react";

import logo from "/assets/Logo2.png";

import playstore from "/assets/playstore.png";
import iosstore from "/assets/iosstore.png";

import '../../index.css'

const Footer = () => {
  const tag = [
    "Game",
    "iPhone",
    "TV",
    "Asus Laptop",
    "MacBook",
    "SSD",
    "Graphics Card",
    "Power Bank",
    "Smart TV",
    "Speaker",
    "Tablet",
    "Microwave",
    "Samsung",
  ];

  return (
    <footer className="container">
      <div className="p-5 py-16  grid grid-cols-1 min-sm:grid-cols-1 min-md:grid-cols-4 gap-5">
        <div className="text-white">
          <img src={logo} alt="" className="mb-5" />
          <div className="customer_support mb-2">
            <h5 className="text-gray-300 text-sm">Customer Supports:</h5>
            <h2>(629) 555-0129</h2>
          </div>
          <h5 className="mb-2 text-gray-300">4517 Washington Ave. Manchester, Kentucky 39495</h5>
          <a href="" className="text-sm">info@kinbo.com</a>
        </div>
        <div>
          <h2 className="uppercase text-white mb-3 font-bold">top category</h2>

          <ul className="*:m-2 text-white *:text-gray-300 *:cursor-pointer *:hover:text-white">
            <li>Computer & Laptop</li>
            <li>Smartphone</li>
            <li>Headphones</li>
            <li>Accessories</li>
            <li>Camera & Photos</li>
            <li>TV & Homes</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-white mb-3 font-bold">quick links</h2>

          <ul className="*:m-2 text-white *:text-gray-300 *:cursor-pointer *:hover:text-white">
            <li>Shop Product</li>
            <li>Shopping Cart</li>
            <li>Wishlist</li>
            <li>Compare</li>
            <li>Track Order</li>
            <li>Customer Help</li>
            <li>About Us</li>
          </ul>
        </div>
        <div>
          <h2 className="uppercase text-white mb-3 font-bold">download app</h2>
          <img src={playstore} className="mb-3" alt="" />
          <img src={iosstore} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
