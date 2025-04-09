import React from "react";
import ProductBox from "./ProductBox";

import first from "/assets/product/1.png";
import second from "/assets/product/2.png";
import third from "/assets/product/3.png";

import fourth from "/assets/product/4.png";
import fifth from "/assets/product/5.png";
import sixth from "/assets/product/6.png";

import seventh from "/assets/product/7.png";
import eigth from "/assets/product/8.png";
import ninth from "/assets/product/9.png";

import tenth from "/assets/product/10.png";
import twelth from "/assets/product/11.png";
import eleventh from "/assets/product/12.png";
import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section className="mt-17">
      <div className="p-5 grid grid-cols-1 gap-5 min-sm:grid-cols-1 min-md:grid-cols-4">
        <div>
          <h2 className="mb-3 uppercase font-semibold">flash sale today</h2>
          <Link to={`/clicon/product_page/${28}`}><ProductBox image={first} title={`JBL Flip 6 30W Portable Bluetooth Speaker (IP67 Waterproof &
            Dustproof, Stereo Channel, Black)`} price={23} /></Link>
          <Link to={`/clicon/product_page/${27}`}><ProductBox image={second} title={`SAMSUNG QN90D 248.9 cm (98 inch) Neo QLED 4K Ultra HD Tizen TV with Quantum Matrix Technology`} price={16320} /></Link>
          <Link to={`/clicon/product_page/${26}`}><ProductBox image={third} title={`LG 21L Convection Microwave Oven with 151 Autocook Menu (Black)`} price={112} /></Link>
        </div>
        <div>
          <h2 className="mb-3 uppercase font-semibold">best seller</h2>
          <Link to={`/clicon/product_page/${25}`}>
          <ProductBox image={fourth} title={`ONIDA 6.5 kg 5 Star Fully Automatic Top Load Washing Machine (T65CDN, Bubble Drum Technology, Black)`} price={145} />
          </Link>
          <Link to={`/clicon/product_page/${24}`}>
          <ProductBox image={fifth} title={"Haier 240 Litres 2 Star Frost Free Double Door Convertible Refrigerator with Turbo Icing Technology (HEF-25TDS, Dazzle Steel)"} price={245} />
          </Link>
          <Link to={`/clicon/product_page/${23}`}>
          <ProductBox image={sixth} title={`ASUS ROG Strix G16 G614JU-N3200WS Intel Core i7 13th Gen Gaming Laptop`} price={1425} />
          </Link>
        </div>
        <div>
          <h2 className="mb-3 uppercase font-semibold">top rated</h2>
          <Link to={`/clicon/product_page/${22}`}>
          <ProductBox image={seventh} title={'Croma 20W Bluetooth Party Speaker with Mic (Up to 6 Hours Playback Time, Black)'} price={15} />
          </Link>
          <Link to={`/clicon/product_page/${21}`}>
          <ProductBox image={eigth} title={'OnePlus 10 Pro 5G (8GB RAM, 128GB, Volcanic Black)'} price={19}/>
          </Link>
          <Link to={`/clicon/product_page/${20}`}>
          <ProductBox image={ninth} title={'Lenovo LOQ 15IRX9 Intel Core i5 13th Gen Gaming Laptop (24GB, 512GB SSD, Windows 11 Home, 6GB Graphics, 15.6 inch 144 Hz Full HD IPS Display, NVIDIA GeForce RTX 4050, MS Office 2021, Luna Grey, 2.38 KG)'} price={87}/>
          </Link>
        </div>
        <div>
          <h2 className="mb-3 uppercase font-semibold">new arrival</h2>
          <Link to={`/clicon/product_page/${19}`}>
          <ProductBox image={tenth} title={"OnePlus Pad 2 Wi-Fi Android Tablet (12.1 Inch, 12GB RAM, 256GB ROM, Nimbus Gray)"} price={39} />
          </Link>
          <Link to={`/clicon/product_page/${18}`}>
          <ProductBox image={eleventh} title={'EUREKA FORBES SMARTCLEAN Robotic Vacuum Cleaner & Mop with Auto Recharging Station'} price={15} />
          </Link>
          <Link to={`/clicon/product_page/${17}`}>
          <ProductBox image={twelth} title={'Nothing Watch Pro 2 Smartwatch with Bluetooth Calling'} price={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;
