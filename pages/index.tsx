import Head from "next/head";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills/Index";
const Home = () => {
  return (
    <>
      <Head>
        <title>Portfolio | Priyank Rajai</title>
        <meta
          name="description"
          content="I hope this tutorial is helpful for you"
        />
      </Head>
      <div className="main-wrapper">
        <div className="relative z-[1]">
          <Header />
        </div>
        <Intro />
        <div className="h-[1px] bg-white mt-24 mb-12"></div>
        <Skills />
        <div className="mt-[40px]">
          <Projects />
        </div>
      </div>
      <div className="mt-[40px]">
        <Footer />
      </div>
    </>
  );
};

export default Home;
