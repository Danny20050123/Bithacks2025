"use client";

import { motion } from "motion/react";

const Landing = () => {
  return (
    <>
      <div className="m-auto h-[60vh] md:h-[90vh] md:pl-[10rem] md:m-0 w-fit flex justify-center flex-col">
        <div className="pb-4">
          <p className="text-center text-7xl md:text-left md:text-8xl">
            BitHacks
          </p>
          <p className="text-center text-lg px-[2.25rem] md:text-left md:text-xl md:pl-1">
            UCI's first embedded systems hackathon
          </p>
        </div>
        <div className="flex-col items-center md-items-left md:flex-row md:justify-left gap-3.5 flex">
          <motion.button
            whileHover={{ scale: 1.2, backgroundColor: "#724CF1" }}
            whileTap={{ scale: 0.9 }}
            className="bg-violet-500 text-xl md:text-sm py-2 px-24 md:px-4 md:py-1.5 w-fit"
          >
            Hacker
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              borderColor: "#724CF1",
              backgroundColor: "#724CF1",
            }}
            whileTap={{ scale: 0.9, backgroundColor: "#724CF1" }}
            className="border-violet-500 border-2 border-solid text-xl py-2 px-24 md:text-sm md:px-4 md:py-1.5 w-fit"
          >
            Mentor
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Landing;
