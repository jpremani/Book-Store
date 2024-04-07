import React from "react";
import "./SingleBook.css";
import { useLoaderData } from "react-router-dom";

const SingleBook = () => {
  const { _id, bookTitle } = useLoaderData();
  console.log("_id in SingleBook:", _id); // Log _id in SingleBook component
  return (
    <div className="mt-28 px-4 lg:px-24">
      <img src={imageUrl} alt="" className="h-96"></img>
      <h2>{bookTitle}</h2>
    </div>
  );
};

export default SingleBook;
