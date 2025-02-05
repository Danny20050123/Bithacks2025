import React from "react";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10 py-6">
        <Image src="globe.svg" width={36} height={36} alt={"BitHacks Logo"} />
        <div className="flex gap-8 justify-end w-fit">
          <p>About</p>
          <p>Tracks</p>
          <p>Faq</p>
          <p>Sponsors</p>
          <p>Team</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
