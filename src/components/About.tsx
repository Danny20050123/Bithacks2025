"use client";

import { motion } from "motion/react";

const About = () => {
  return (
    <>
      <div className="relative">
        <div
          id="about"
          className="lg:h-[65vh] md:h-[45vh] h-[20vh] bg-violet-500 flex items-center"
        >
          <p className="md:text-5xl text-[2vw] text-right pl-[50vw] right-[10rem] lg:leading-[48px] md:leading-[3vw] leading-[2vw] absolute">
            As UCI's first embedded systems hackathon, BitHacks is focused on
            providing a space for students to build, create, explore, and grow.
            BitHacks aims to foster creativity and push your imagination to its
            limits.
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
          <p className="">April 4-6 • Location</p>
          <p className="text-5xl">36 Hours</p>
          <p className="text-5xl pb-4">$500+ Prizes</p>
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
