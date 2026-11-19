"use client";

import React from "react";
import CardComponent from "./Card";

// const star1 = () => {

// }

const Tracks = () => {
  return (
    <div className="flex justify-center bg-[#B69BFB] h-[1450px] md:h-[1000px]" id = "tracks">
      <div className="invisible md:visible absolute opacity-100 top-[1850px] h-[400px] w-[300px] left-[50px] justify-left items-left">
      <img className="md:absolute h-[200px] w-[200px] left-0 justify-left items-left rotate-12" src="/star_pixel_pink.svg" alt="Decorative content"/>
      </div>
      <div className="invisible w-[0px] h-[0px] md:absolute md:opacity-100 md:top-[2300px] md:h-[400px] md:w-[600px] md:right-10 md:justify-right md:items-right md:visible">
        <img
          className="md:absolute h-[400px] w-[400px] right-0 justify-left items-left"
          src="/shooting_star_pixel_pink.svg"
          alt="Decorative content"
        />
      </div>
      <div className="flex flex-col gap-5 p-5 text-center justify-center">
        <h1 className="relative flex text-center justify-center font-jersey h-[100px] text-5xl top-[-50px]">
          Tracks
        </h1>
        <div className="relative flex flex-col top-[0px] gap-20 p-5 md:flex-row gap-20">
        <CardComponent title="Best Overall 🏆" content="Awarded to the most outstanding hack that excels in creativity, functionality, and impact." img="/best_overall1.svg" />
        <CardComponent title="Best Beginner 🚀" content="A special prize for first-time hackers who impress with their innovation and effort." img="/best_beginner1.svg" />
        <CardComponent title="Hacker’s Choice 🗳️" content="Voted by fellow participants, this hack wins the community’s seal of approval." img="/hackers_choice1.svg" />
        </div>

        {/* Add new tracks as more cards here (another row works the same way). */}
      </div>
    </div>
  );
};

export default Tracks;
