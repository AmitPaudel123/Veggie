import React from "react";
import Contact from "./Contact";
import About from "./About";
import Vegetables from "./Vegetables";
import Blog from "./Blog";
import Swiperr from "../Components/Swiperr";

const Home = () => {
  return (
    <>
      <Swiperr />
      <About />
      <Vegetables />
      <Blog />
      <Contact />
    </>
  );
};

export default Home;
