"use client";

import React from "react";
import CardComponent from "./Card";

// const star1 = () => {

// }

const Tracks = () => {
  return (
    <div className="flex justify-center bg-[#B69BFB] h-[2400px] md:h-[1000px]" id = "tracks">
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
      <div className="invisible w-[0px] h-[0px] md:visible md:absolute md:opacity-100 md:top-[2300px] md:h-[400px] md:w-[400px] md:left-0 md:justify-left md:items-left">
        <img
          className="md:absolute h-[400px] w-[600px] left-0 justify-left items-left [transform:rotateY(180deg)]"
          src="https://s3-alpha-sig.figma.com/img/ca70/c85b/5eb3587c8a062897708a9158999634a9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y0cK16tfDh-KuhEZVI7u-iUdwhC0FfpD2Dve0h4ZgW3c1k~tUhADeOXO7RwJGKC~DeHOrnjHFbaXY-c6sUCZMhIaeaEOdJd6IIm9hQRFtAHDnkDfXVh-rxdrQLckLWqq7GutQdoxJuAm7fROLMOuMPIdQw6Z4v5hp5-ABdqlT6R5zT1snWpAPFPG8qoUgXsKvTSxTJEfc-2wAyz5ajOZceiLzAEymRV01x2VkS3vEZN1WbQoq5b2MZgE6N1jOUJhHTtGBL2HRYryz2Z3v6AYwKsO9GYTle0FeJf4Fpe8gEA5tZHbHAsbRNyX3j~xbWWJfOu5MIBwOq939Rf9aACeqw__"
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

        <div className="relative flex flex-col justify-center top-[100px] gap-20 p-5 md:flex-row gap-20">
        <CardComponent title="Medtronic Track 💙" content="Sponsored by Medtronic, this prize goes to the best healthcare or medical innovation." img="/medtronic1.svg" />
        <CardComponent title="Meme Hack 😂" content="The funniest, most creative, and internet-worthy hack takes home this prize." img="/meme_hack1.svg" />
        </div>
      </div>
    </div>
  );
};

export default Tracks;
