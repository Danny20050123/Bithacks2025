"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <div id="home" className="relative">
        <nav className="flex justify-between items-center px-10 py-6">
          {/* <nav className="flex justify-between items-center px-10 py-6"> */}
          {/* <motion.div whileHover={{ scale: 1.2 }}> */}
          <a href="#home">
            <Image
              src="globe.svg"
              width={36}
              height={36}
              alt={"bithacks logo"}
            />
          </a>
          <motion.div
            onClick={() => {
              setNavbarOpen(!navbarOpen);
            }}
          >
            <Image
              className="bg-purple-700"
              src="hamburger-menu.svg"
              width={36}
              height={36}
              alt={"three line menu"}
            />
          </motion.div>
          {/* </motion.div> */}
          {/* <div className="flex gap-8 justify-end w-fit">
            <a href="#about">About</a>
            <a href="#tracks">Tracks</a>
            <a href="#faq">FAQ</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#team">Team</a>
          </div> */}
        </nav>
        <div className="absolute right-10">
          {navbarOpen && (
            <ul className="bg-purple-700 flex flex-col text-right px-8 py-4 w-fit gap-8">
              <a href="#about">About</a>
              <a href="#tracks">Tracks</a>
              <a href="#faq">FAQ</a>
              <a href="#sponsors">Sponsors</a>
              <a href="#team">Team</a>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
