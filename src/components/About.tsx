"use client";

import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
      <div className="relative">
        <div
          id="about"
          className="lg:h-[65vh] md:h-[45vh] h-[20vh] bg-violet-500 flex items-center"
        >
          {/* <p className="lg:text-[48px] md:text-[3vw] text-[2vw] text-right pl-[50vw] right-[10rem] lg:leading-[48px] md:leading-[3vw] leading-[2vw] absolute"> */}
          <p className="lg:text-[48px] md:text-[3vw] text-[2vw] text-right pl-[50vw] right-[10rem] lg:leading-[48px] md:leading-[3vw] leading-[2vw] absolute">
            BitHacks is the when you biggest and new. This is the all time
            electrical and embedded hackathon. Be there or be square.
          </p>
        </div>
        <div
          className="w-0 h-0 
        border-l-[98vw] border-l-transparent
        border-t-[75px] border-t-violet-500
        border-r-[0] border-r-transparent
        right-0 flex absolute"
        ></div>
      </div>

      <div className="pl-[10rem] h-[60vh] w-fit flex flex-col justify-center">
        <div>
          <p className="">Date | Location</p>
          <p className="text-5xl">36 Hours</p>
          <p className="text-5xl pb-4">$60,000+ Prizes</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.2, backgroundColor: "#724CF1" }}
          className="bg-violet-500 px-4 py-1.5 w-fit"
        >
          Sponsor
        </motion.button>
      </div>
    </>
  );
};

export default About;
