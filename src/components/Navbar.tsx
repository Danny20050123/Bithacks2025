"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

{
  /* const [navbarOpen, setNavbarOpen] = useState(false) */
}

const Navbar = () => {
  return (
    <>
      <div id="home">
        <nav className="flex justify-between items-center px-10 py-6">
          <motion.div whileHover={{ scale: 1.2 }}>
            <a href="#home">
              <Image
                src="globe.svg"
                width={36}
                height={36}
                alt={"BitHacks Logo"}
              />
            </a>
          </motion.div>
          <div className="flex gap-8 justify-end w-fit">
            <a href="#about">About</a>
            <a href="#tracks">Tracks</a>
            <a href="#faq">FAQ</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#team">Team</a>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
