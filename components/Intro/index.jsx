import Link from "next/link";
import React from "react";

const Intro = () => {
  return (
    <section>
      <div className="pt-[200px] relative">
        <div className="absolute top-[130px] left-[-100%] vsm:left-[-53%] sm:left-[-53%] md:left-[-30%]">
          <svg xmlns="http://www.w3.org/2000/svg" width="530" height="129">
            <g fill="none" fill-rule="evenodd" stroke="#FFF" opacity=".25">
              <ellipse cx="265" cy="40" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="52" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="65" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="77" rx="264.5" ry="39.5" />
              <ellipse cx="265" cy="89" rx="264.5" ry="39.5" />
            </g>
          </svg>
        </div>
        <div className="font-bold text-4xl vsm:text-5xl md:text-6xl lg:text-7xl mb-11">
          <h3>Nice to meet you!</h3>
          <h1>
            I&#39;m <span className="fav-underline">Priyank Rajai</span>.
          </h1>
        </div>
        <h2 className="max-w-[600px] text-2xl">
          Based in India, I&#39;m a full-stack developer passionate about
          building accessible web apps that users love.
        </h2>
      </div>
      <Link href="#contact-me">
        <div className="mt-[40px] lg:[mt-60px] tracking-widest font-bold border-b-[2px] border-[#4ce19e] w-max pb-2 hover:text-[#4ce19e]">
          CONTACT ME
        </div>
      </Link>
    </section>
  );
};

export default Intro;
