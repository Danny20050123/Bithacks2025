"use client";

import React, { useState } from "react";
import CardComponent from "./Card";

const Tracks = () => {
  return (
    <div id = "tracks" className="flex justify-center bg-[#43345d] min-h-[800px] rounded-[15px]">
      {/* <p>Tracks area</p> */}
      <div className="flex flex-col gap-5 p-5">
        <div className="flex flex-col gap-20 p-5 md:flex-row gap-20">
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
