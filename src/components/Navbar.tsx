"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <>
      <nav id="home" className="flex justify-between items-center px-10 py-6">
        <a href="#home">
          <Image src="globe.svg" width={36} height={36} alt={"BitHacks Logo"} />
        </a>
        <div className="flex gap-8 justify-end w-fit">
          <a href="#about">About</a>
          <a href="#tracks">Tracks</a>
          <a href="#faq">FAQ</a>
          <a href="#sponsors">Sponsors</a>
          <a href="#team">Team</a>
        </div>
      </nav>

      <div className="h-[90vh] flex justify-center flex-col pl-[10rem]">
        <div className="pb-4">
          <p className="text-8xl">BitHacks</p>
          <p className="text-xl pl-1">UCI's first embedded hackathon</p>
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

      <div id="about" className="h-[65vh] bg-violet-500 flex items-center">
        <p className="text-5xl text-right pr-[10rem] pl-[40rem] py-[4rem]">
          BitHacks is the when you biggest and new. This is the all time
          electrical and embedded hackathon. Be there or be square.
        </p>
      </div>
      <div
        className="w-0 h-0 
        border-l-[98.95vw] border-l-transparent
        border-t-[75px] border-t-violet-500
        border-r-[0] border-r-transparent
        right-0 flex"
      ></div>

      <div className="pl-[10rem] h-[60vh] flex flex-col justify-center">
        <div>
          <p className="">Date | Location</p>
          <p className="text-5xl">36 Hours</p>
          <p className="text-5xl pb-4">$60,000+ Prizes</p>
        </div>
        <button className="bg-violet-500 px-4 py-1.5 w-fit">Sponsor</button>
      </div>
    </>
  );
};

export default Navbar;
