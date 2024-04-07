import React from "react";
import { Link } from "react-router-dom";

const PromoBanner = () => {
  return (
    <div className="mt-16 py-12 bg-teal-100 px-4 lg:px-24">
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 ">
        <div className="md:w-1/2">
          <h2 className="text-4xl font-bold mb-6 leading-snug">
            2024 National Book Awards for Fiction ShortList
          </h2>
          <Link to="/shop" className="mt-12 block">
            <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black translate-all duration-300">
              Get Promo Code
            </button>
          </Link>
        </div>
        <div>
          <img
            src="https://m.media-amazon.com/images/I/71H3ZRlrmVL._SL1024_.jpg"
            alt=""
            className="w-96 rounded"
          />
        </div>
      </div>
    </div>
  );
};

export default PromoBanner;
