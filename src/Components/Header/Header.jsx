import React, { useState, useEffect, useRef, use } from "react";
import {
  FaTwitter,
  FaFacebook,
  FaPinterestP,
  FaInstagram,
} from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { CiShoppingCart } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import logo from "/assets/Logo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { CiLogout } from "react-icons/ci";
import { useAuth0 } from "@auth0/auth0-react";

const Header = () => {
  const { loginWithRedirect, logout, isAuthenticated, user, isLoading } =
    useAuth0();

  console.log(user)

  const getData = useSelector((state) => state.cart.data);
  const cartLength = useSelector((state) => state.cart.inCart);

  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);

  const searchRef = useRef(null);

  const handleInput = (e) => {
    const value = e.target.value;
    setInput(value);
    setActive(value.trim().length > 0);
  };

  const handleClickOutside = (e) => {
    if (searchRef.current && !searchRef.current.contains(e.target)) {
      setShowSuggestions(false);
    }
  };

  const filteredData = input
    ? getData.filter((item) =>
        item.product.toLowerCase().includes(input.toLowerCase())
      )
    : getData.slice(0, 5);

  const handleFocus = () => {
    setShowSuggestions(true);
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <section className="container">
      <div className="text-white p-5 border-b block min-sm:block min-md:flex items-center justify-between">
        <h5 className="text-sm text-center min-sm:text-center">
          Welcome to Clicon online eCommerce store.
        </h5>
        <div className="block min-sm:block min-md:flex items-center">
          <div className="follow block min-sm:block min-md:flex items-center gap-2">
            <h4 className="flex justify-center mt-3 min-sm:mt-3 min-md:mt-0">
              Follow us:
            </h4>
            <div className="flex my-3 justify-center min-sm:my-3 min-md:my-0 gap-4">
              <FaTwitter />
              <FaFacebook />
              <FaPinterestP />
              <FaInstagram />
            </div>
          </div>
          <span className="border border-gray-200 h-[25px] mx-5 hidden min-sm:hidden min-md:block"></span>
          <div className="flex justify-center">
            <select name="" id="" className="*:text-black mr-4 outline-none">
              <option value="Eng">Eng</option>
              <option value="HIN">HIN</option>
              <option value="SPN">SPN</option>
            </select>
            <select name="" id="" className="*:text-black outline-none">
              <option value="USD">USD</option>
              <option value="INR">INR</option>
              <option value="EUR">EUR</option>
              <option value="AUD">AUD</option>
            </select>
          </div>
        </div>
      </div>
      <div className="p-5 block min-sm:block min-md:flex justify-between items-center">
        <div className="companyIcon flex justify-center">
          <Link to={"/clicon"}>
            <img src={logo} alt="" className="w-30" />
          </Link>
        </div>
        <div
          className="search bg-white relative items-center p-2 my-5 min-sm:my-5 min-md:my-0 w-full min-sm:w-full min-md:w-90 rounded"
          ref={searchRef}
        >
          <div className="justify-between flex items-center">
            <input
              type="text"
              placeholder="Search for anything...."
              className="w-full outline-0"
              value={input}
              onChange={handleInput}
              onFocus={handleFocus}
            />
            <FiSearch />
          </div>

          {showSuggestions && (
            <div className="absolute bg-white shadow-gray-300 rounded shadow-xl w-full left-0 top-11 px-4 py-2 z-20">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <Link
                    key={item.id}
                    to={`/clicon/product_page/${item.id}`}
                    className="flex items-center gap-2 my-5"
                    onClick={() => setShowSuggestions(false)}
                  >
                    <img className="w-12" src={item.productImage[0]} alt="" />
                    <h3 className="line-clamp-1">{item.product}</h3>
                  </Link>
                ))
              ) : (
                <p className="text-gray-500">No products found</p>
              )}
            </div>
          )}
        </div>
        <div className="cart_user flex gap-5 items-center justify-between">
          <div className="cart text-white relative cursor-pointer">
            <Link to={"/clicon/cart"}>
              <CiShoppingCart className="text-3xl" />
            </Link>
            <span className="absolute text-sm bg-white text-black px-2 rounded-full -top-2 -right-2">
              {cartLength.length}
            </span>
          </div>

          {isAuthenticated ? (
            <Link to={`/clicon/${user.nickname}`}>
            <FaUser
                className="text-white text-2xl"
              />
            </Link>

          ) : (
            <div className="user cursor-pointer">
              <h2 onClick={()=> loginWithRedirect()}>Login</h2>
              {/* <FaUser
                onClick={() => loginWithRedirect()}
                className="text-white text-2xl"
              /> */}
            </div>
          )}

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default Header;
