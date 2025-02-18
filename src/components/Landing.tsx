"use client";

import React from "react";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <>
      <div className="h-[90vh] w-fit flex justify-center flex-col pl-[10rem]">
        <div className="pb-4">
          <p className="text-8xl">BitHacks</p>
          <p className="text-xl pl-1">UCI's first embedded systems hackathon</p>
        </div>
        <div className="gap-3.5 flex">
          <motion.button
            whileHover={{ scale: 1.2, backgroundColor: "#724CF1" }}
            className="bg-violet-500 px-4 py-1.5 w-fit"
          >
            Hacker
          </motion.button>
          <motion.button
            whileHover={{
              scale: 1.2,
              borderColor: "#724CF1",
              backgroundColor: "#724CF1",
            }}
            className="border-violet-500 border-2 border-solid px-4 py-1.5 w-fit"
          >
            Mentor
          </motion.button>
        </div>
      </div>
    </>
  );
};

export default Landing;
