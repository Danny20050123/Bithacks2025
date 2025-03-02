"use client";

import { useEffect } from "react";
import { motion } from "motion/react";
import TypeIt from "typeit";

const About = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const target = document.getElementById("prizes");

      if (!target) return;
      new TypeIt("#prizes", {
        speed: 30,
        waitUntilVisible: true,
        loop: true,
      })
        .type("$1000+ in Prizes")
        .pause(1000)
        .delete(20)
        .pause(1000)
        .type("Prizes include: Monitors")
        .pause(1000)
        .delete(8)
        .pause(1000)
        .type("Kisses from Danny")
        .pause(1000)
        .delete(17)
        .pause(1000)
        .type("Free IEEE position")
        .pause(1000)
        .delete(18)
        .pause(1000)
        .go();
    }
  }, []);

  return (
    <>
      <div className="relative">
        <div className="h-[65vh] md:h-[68vh] bg-[#DFBAFF] flex items-center">
          <p className="font-rethink text-[1.5rem] md:text-4xl md:leading-[3rem] md:pr-[10rem] lg:pl-[44vw] md:pl-[20vw] pt-8 text-right max-md:px-10 absolute">
            As UCI's first Embedded Systems hackathon, BitHacks is focused on
            providing a space for students to <b>create</b>, <b>explore</b>, and{" "}
            <b>grow</b>. BitHacks aims to foster creativity and{" "}
            <b>push your imagination beyond its limits</b>.
          </p>
        </div>
        <div
          id="about"
          className="w-0 h-0 
        border-l-[98vw] border-l-transparent
        border-t-[75px] border-t-[#DFBAFF]
        border-r-[0] border-r-transparent
        right-0 flex absolute"
        ></div>
      </div>

      <div className="font-rethink pl-10 md:pl-[10rem] h-[60vh] w-fit flex flex-col justify-center">
        <div>
          <p className="">April 11-13 • Doheny Beach Student Center</p>
          <p className="text-4xl md:text-5xl">36 Hours</p>
          <p id="prizes" className="text-4xl md:text-5xl pb-4"></p>
        </div>
        {/* <motion.button
          whileHover={{ scale: 1.2, backgroundColor: "#724CF1" }}
          whileTap={{ scale: 0.9, backgroundColor: "#724CF1" }}
          className="bg-violet-500 rounded-full text-xl py-2 px-24 md:text-sm md:px-4 md:py-1.5 w-fit"
        >
          Sponsor
        </motion.button> */}
      </div>
    </>
  );
};

export default About;
