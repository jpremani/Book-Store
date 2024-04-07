import React from "react";
import "./Home.css";
import Banner from "../../components/Banner/Banner";
import FavoriteBooks from "../../components/FavoriteBooks/FavoriteBooks";
import FavBook from "../../components/FavBook/FavBook";
import PromoBanner from "../../components/PromoBanner/PromoBanner";
import OtherBook from "../../components/OtherBook/OtherBook";
import Review from "../../components/Review/Review";
import NavBar from "../../components/NavBar/NavBar";

const Home = () => {
  return (
    <div className="">
      <NavBar />
      <Banner />
      <FavoriteBooks />
      <FavBook />
      <PromoBanner />
      <OtherBook />
      <Review />
    </div>
  );
};

export default Home;
