"use client";

import { useEffect } from "react";
import AboutCard from "../components/AboutCard";
import TypeIt from "typeit";

const About = () => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const target = document.getElementById("prizes");

      if (!target) return;
      // Edit these to change the rotating prize text.
      const headline = "$3000+ in Prize Money";
      const prefix = "Prizes include: ";
      const prizes = [
        "Bambu Lab A1 Mini 3D Printers",
        "Weller Soldering Stations",
        "JBL Flip 6 Speakers",
      ];

      const typer = new TypeIt("#prizes", {
        speed: 30,
        waitUntilVisible: true,
        loop: true,
      })
        .type(headline)
        .pause(1000)
        .delete(headline.length)
        .pause(1000)
        .type(prefix);

      prizes.forEach((prize, i) => {
        typer.type(prize).pause(1000);
        // Keep "Prizes include: " on screen between items; clear everything after the last one.
        typer.delete(i === prizes.length - 1 ? prefix.length + prize.length : prize.length);
        typer.pause(1000);
      });

      typer.go();
    }
  }, []);

  return (
    <>
      {/* Original About Section Layout */}
      {/* <div className="relative">
        <div className="h-[65vh] w=[40vw] pt-[8rem] md:h-[68vh] bg-[#DFBAFF] flex items-center">
          <div className="bg-white h-[65vh]">
            <p className="font-rethink text-[1.5rem] md:text-4xl md:leading-[3rem] md:pr-[10rem] lg:pl-[44vw] md:pl-[20vw] pt-8 text-right max-md:px-10 absolute">
              As UCI's first Embedded Systems hackathon, BitHacks is focused on
              providing a space for students to <b>create</b>, <b>explore</b>,
              and <b>grow</b>. BitHacks aims to foster creativity and{" "}
              <b>push your imagination beyond its limits</b>.
            </p>
          </div>
        </div>
      </div>
      <div
        id="about"
        className="w-0 h-0 
        border-l-[98vw] border-l-transparent
        border-t-[75px] border-t-[#DFBAFF]
        border-r-[0] border-r-transparent
        right-0 flex absolute"
      ></div> */}
      {/* </div> */}

      <div
        style={{
          backgroundImage: "url('car-graphic.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "bottom left 80%",
        }}
        className="h-screen overflow-hidden right-5 w-100"
      >
        <div
          id="about"
          className="relative font-rethink gap-2 md:gap-16 m-auto md:m-0 md:pl-10 md:px-[4rem] w-fit flex flex-col md:flex-row items-center"
        >
          <AboutCard />
          <div className="bg-[#6c81e6]/65 text-white mt-8 p-8 w-[20rem] md:w-[32rem] rounded-lg">
            <p className="md:text-xl">
              April 9-11 • Doheny Beach Student Center
            </p>
            <p className="text-4xl md:text-5xl">36 Hours</p>
            <p id="prizes" className="h-[12rem] md:h-[10rem] text-4xl md:text-5xl pb-4"></p>
            {/* Sponsor Button */}
            {/* <motion.button
          whileHover={{ scale: 1.2, backgroundColor: "#724CF1" }}
          whileTap={{ scale: 0.9, backgroundColor: "#724CF1" }}
          className="bg-violet-500 rounded-full text-xl py-2 px-24 md:text-sm md:px-4 md:py-1.5 w-fit"
        >
          Sponsor
        </motion.button> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
