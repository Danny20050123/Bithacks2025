"use client";

import { motion } from "motion/react";

const About = () => {
  return (
    <>
      <div className="relative">
        {/* <div
          id="about"
          className="lg:h-[65vh] md:h-[45vh] h-[20vh] bg-violet-500 flex items-center"
        > */}
        <div
          id="about"
          className="h-[65vh] md:h-[68vh] bg-violet-500 flex items-center"
        >
          {/* <p className="md:text-5xl text-[2vw] text-right pl-[50vw] right-[10rem] lg:leading-[48px] md:leading-[3vw] leading-[2vw] absolute"> */}
          <p className="text-[1.5rem] md:text-4xl md:leading-[3rem] md:pr-[10rem] lg:pl-[44vw] md:pl-[20vw] pt-8 text-right max-md:px-10 absolute">
            As UCI's first embedded systems hackathon, BitHacks is focused on
            providing a space for students to <b>create</b>, <b>explore</b>, and{" "}
            <b>grow</b>. BitHacks aims to foster creativity and{" "}
            <b>push your imagination beyond its limits</b>.
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

      <div className="pl-10 md:pl-[10rem] h-[60vh] w-fit flex flex-col justify-center">
        <div>
          <p className="">April 4-6 • Location</p>
          <p className="text-4xl md:text-5xl">36 Hours</p>
          <p className="text-4xl md:text-5xl pb-4">$500+ Prizes</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.2, backgroundColor: "#724CF1" }}
          whileTap={{ scale: 0.9, backgroundColor: "#724CF1" }}
          className="bg-violet-500 text-xl py-2 px-24 md:text-sm md:px-4 md:py-1.5 w-fit"
        >
          Sponsor
        </motion.button>
      </div>
    </>
  );
};

export default About;
