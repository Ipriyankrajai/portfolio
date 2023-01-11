import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="pt-[200px]">
        <div className="font-bold text-4xl vsm:text-5xl md:text-6xl lg:text-7xl mb-11">
          <h2>Nice to meet you!</h2>
          <h2>
            I'm <span className="fav-underline">Priyank Rajai</span>.
          </h2>
        </div>
        <p className="max-w-[600px] text-2xl">
          Based in India, I’m a front-end developer passionate about building
          accessible web apps that users love.
        </p>
      </div>
    </section>
  );
};

export default Intro;
