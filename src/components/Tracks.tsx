"use client";

import React, { useState } from "react";
import CardComponent from "./Card";

// const star1 = () => {
  
// }

const Tracks = () => {
  return (
    <div className=" flex justify-center bg-[#B69BFB] min-h-[800px] rounded-[15px] md:h-[1000px]" id = "tracks">
      <div className="absolute top-[2600px] h-[400px] w-[600px] left-0 justify-left items-left">
      <img className="absolute h-[400px] w-[600px] left-0 justify-left items-left [transform:rotateY(180deg)]" src="https://s3-alpha-sig.figma.com/img/ca70/c85b/5eb3587c8a062897708a9158999634a9?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Y0cK16tfDh-KuhEZVI7u-iUdwhC0FfpD2Dve0h4ZgW3c1k~tUhADeOXO7RwJGKC~DeHOrnjHFbaXY-c6sUCZMhIaeaEOdJd6IIm9hQRFtAHDnkDfXVh-rxdrQLckLWqq7GutQdoxJuAm7fROLMOuMPIdQw6Z4v5hp5-ABdqlT6R5zT1snWpAPFPG8qoUgXsKvTSxTJEfc-2wAyz5ajOZceiLzAEymRV01x2VkS3vEZN1WbQoq5b2MZgE6N1jOUJhHTtGBL2HRYryz2Z3v6AYwKsO9GYTle0FeJf4Fpe8gEA5tZHbHAsbRNyX3j~xbWWJfOu5MIBwOq939Rf9aACeqw__" alt="Decorative content"/>
      </div>
      <div className="flex flex-col gap-5 p-5 text-center justify-center">
      <h1 className="flex text-center justify-center h-[100px] text-4xl">Tracks</h1>
        <div className="flex flex-col gap-5 p-5 md:flex-row gap-20">
        <CardComponent title="hi" content="there" />
        <CardComponent title="hello" content="world" />
        <CardComponent title="hi" content="there" />
        </div>

        <div className="flex flex-col gap-5 p-5 md:flex-row gap-20">
        <CardComponent title="hi" content="there" />
        <CardComponent title="hi" content="there" />
        <CardComponent title="hi" content="there" />
        </div>
      </div>
    </div>
  );
};

export default Tracks;
