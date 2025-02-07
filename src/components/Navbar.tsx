import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-6">
        <Image src="globe.svg" width={36} height={36} alt={"BitHacks Logo"} />
        <div className="flex gap-8 justify-end w-fit">
          <a>About</a>
          <a>Tracks</a>
          <a>Faq</a>
          <a>Sponsors</a>
          <a>Team</a>
        </div>
      </div>

      <div className="h-[75vh] flex justify-center flex-col pl-10">
        <div className="pb-4">
          <p className="text-8xl">BitHacks</p>
          <p className="text-xl pl-1">UCI's first embedded hackathon</p>
        </div>
        <div className="gap-3.5 flex">
          <button className="bg-violet-900 px-2 py-1.5 w-fit">Hacker</button>
          <button className="border-violet-900 border-2 border-solid px-2 py-1.5 w-fit">
            Mentor
          </button>
        </div>
      </div>

      {/* <div className="h-[75vh] bg-violet-900 flex items-center">
        <p className="text-5xl text-right pl-[46rem] pr-[10rem]">
          BitHacks is the when you biggest and new. This is the all time
          electrical and embedded hackathon. Be there or be square.
        </p>
      </div> */}

      <div className="pl-[10rem] h-[75vh] flex flex-col justify-center">
        <div>
          <p>Date | Location</p>
          <p className="text-5xl">36 Hours</p>
          <p className="text-5xl pb-4">$60,000+ Prizes</p>
        </div>
        <button className="bg-violet-900 px-2 py-1.5 w-fit">Sponsor</button>
      </div>
    </>
  );
};

export default Navbar;
