import React from "react";
import Header from "../components/Header";
import Intro from "../components/Intro";
const Home = () => {
  return (
    <div className="main-wrapper">
      <div className="relative">
        <Header />
      </div>
      <Intro />
    </div>
  );
};

export default Home;
