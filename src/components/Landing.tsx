"use client";

import { motion } from "motion/react";
import Model from "./model";
const Landing = () => {
  return (
    <>
      <div className="m-auto h-[60vh] md:h-[90vh] md:pl-[10rem] md:m-0 w-fit flex justify-center flex-col">
        <div className="pb-4">
          <p className="font-jersey text-center text-7xl md:text-left md:text-8xl">
            BitHacks
          </p>
          <p className="font-rethink text-center text-lg px-[2.25rem] md:text-left md:text-xl md:pl-1">
            UCI's first Embedded Systems hackathon
          </p>
        </div>
        <div className="font-rethink flex-col items-center md-items-left md:flex-row md:justify-left gap-3.5 flex">
          <motion.button
            whileHover={{ scale: 1.2, backgroundColor: "#8BDCFE" }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#A6EFFF] rounded-full text-xl md:text-sm py-2 px-24 md:px-4 md:py-1.5 w-fit"
          >
            Hacker
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              backgroundColor: "#C9A4FF",
            }}
            whileTap={{ scale: 0.9 }}
            className="bg-[#E3C4FF] rounded-full text-xl py-2 px-24 md:text-sm md:px-4 md:py-1.5 w-fit"
          >
            Mentor
          </motion.button>
        </div>
        <div className="h-0, w-0 md: ">
          <Model />
        </div>
      </div>
    </>
  );
};

export default Landing;
