import React from "react";
import { Link } from "react-router-dom";

const FavBook = () => {
  return (
    <div className="px-4 lg:px-24 my-20 flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="md:w-1/2">
        <img
          src="https://i.insider.com/61117f8f2a24d0001862714c?width=700"
          alt=""
          className="rounded md:w-10/12"
        ></img>
      </div>
      <div className="md:w-1/2 space-y-6">
        <h2 className="text-5xl font-bold my-5 md:w-3/4 leading-snug">
          Find your favorite <span className="text-blue-700">Book Here!</span>
        </h2>
        <p className="mb-10 text-lg md:w-5/6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus,
          aperiam autem sunt ut accusantium eos aut necessitatibus. Aperiam
          ipsam tempore culpa, molestiae iure ex velit, amet architecto facere a
          facilis?
        </p>
        <div className="flex flex-col sm:flex-row justify-between gap-6 md:w-3/4 my-14">
          <div>
            <h3 className="text-3xl font-bold">800+</h3>
            <p className="text-base">Book Listing</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">550+</h3>
            <p className="text-base">Register Users</p>
          </div>
          <div>
            <h3 className="text-3xl font-bold">200+</h3>
            <p className="text-base">Pdf downloaded</p>
          </div>
        </div>
        <Link to="/shop" className="mt-12 block">
          <button className="bg-blue-700 text-white font-semibold px-5 py-2 rounded hover:bg-black translate-all duration-300">
            Explore More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default FavBook;
