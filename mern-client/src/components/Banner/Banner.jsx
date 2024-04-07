import React from "react";
import BannerCard from "./BannerCard";

const Banner = () => {
  return (
    <div className="px-4 lg:px-24 bg-teal-100 flex item-center">
      <div className="flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40">
        {/* Left side */}
        <div className="md:w-1/2 space-y-8 h-full">
          <h2 className="text-5xl font-bold leading-snug text-black">
            Buy and Sell Your Books&nbsp;
            <span className="text-blue-700">for the Best Prices</span>
          </h2>
          <p className="md:w-4/5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
            ratione dignissimos officia explicabo magnam similique rem at sit,
            eum deserunt ipsa quam hic id quia reiciendis atque, omnis corrupti
            ut.
          </p>
          <div>
            <input
              type="search"
              placeholder="Search a book"
              id="search"
              name="search"
              className="py-2 px-2 rounded-s-sm outline-none"
            ></input>
            <button className="bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black transition-all ease-in duration-200">
              Search
            </button>
          </div>
        </div>
        {/* Right Side */}
        <div>{<BannerCard />}</div>
      </div>
    </div>
  );
};

export default Banner;
