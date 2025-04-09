import React from "react";
import BlackFirday from "./Components/Header/BlackFirday";
import Header from "./Components/Header/Header";


import { Routes, Route } from "react-router-dom";
import Home from "./Components/Pages/Home/Home";
import ProductPage from "./Components/Pages/ProductPage/ProductPage";
import Footer from "./Components/Footer/Footer";
import Error from "./Components/Pages/Error/Error";
import Cart from "./Components/Pages/Cart/Cart";
import Computer_Laptop from "./Components/Pages/Computer_Laptop/Computer_Laptop";
import Smartphone from "./Components/Pages/Smartphone/Smartphone";
import Smartwatch from "./Components/Pages/Smartwatch/Smartwatch";
import Tv_Home_Applience from "./Components/Pages/Tv_Home_Applience/Tv_Home_Applience";
import Headphone from "./Components/Pages/Headphone/Headphone";
import Gaming from "./Components/Pages/Gaming/Gaming";
import Camera from "./Components/Pages/Camera/Camera";
import All from "./Components/Pages/All/All";
import Login from './Components/Login/Login'
import UserDetails from "./Components/UserDetails/UserDetails";

const App = () => {
  return (
    <div>
      <div className="bg-gray-900">
        <BlackFirday />
      </div>
      <div className="bg-[#1B6392]">
        <Header />
      </div>

      <Routes>
        <Route path="/clicon" element={<Home />} />
        <Route path="/clicon/product_page/:id" element={<ProductPage />} />
        <Route path="/clicon/cart" element={<Cart />} />

        <Route path="/clicon/all" element={<All />} />
        <Route path="/clicon/computer_laptop" element={<Computer_Laptop />} />
        <Route path="/clicon/smartphone" element={<Smartphone />} />
        <Route path="/clicon/headphone" element={<Headphone />} />
        <Route path="/clicon/gaming_console" element={<Gaming />} />
        <Route path="/clicon/camera" element={<Camera />} />
        <Route path="/clicon/tv_home_applience" element={<Tv_Home_Applience />} />
        <Route path="/clicon/smartwatch" element={<Smartwatch />} />
        <Route path="/clicon/login" element={<Login />} />

        <Route path="/clicon/:user" element={<UserDetails />} />

        <Route path="*" element={<Error />} />
      </Routes>
      <div className="bg-gray-900">
        <Footer />
      </div>
    </div>
  );
};

export default App;
