import React from "react";
import Banner from "../../components/Banner";
import PostCards from "../blogs/PostCards";
import Category from "./Category";

const Home = () => {
  return (
    <main className="mt-10">
      <Banner />
      <div className="block lg:flex lg:space-x-2 px-2 lg:p-0 mt-10 mb-10">
        <PostCards />
        <Category />
      </div>
    </main>
  );
};

export default Home;
