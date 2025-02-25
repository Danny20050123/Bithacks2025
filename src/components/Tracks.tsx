"use client";

import React, { useState } from "react";
import CardComponent from "./Card";

const Tracks = () => {
  return (
    <div className="flex justify-center bg-[#43345d] min-h-[800px] rounded-[15px]">
      {/* <p>Tracks area</p> */}
      <div className="grid gap-5 p-5">
        <CardComponent title="hi" content="there" />
        <CardComponent title="hello" content="world" />
      </div>
      <div className="grid gap-5 p-5">
        <CardComponent title="hi" content="there" />
        <CardComponent title="hi" content="there" />
      </div>
      <div className="grid gap-5 p-5">
        <CardComponent title="hi" content="there" />
        <CardComponent title="hi" content="there" />
      </div>
    </div>
  );
};

export default Tracks;
