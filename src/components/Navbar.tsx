"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, cubicBezier, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  let bezier;
  useEffect(() => {
    bezier = cubicBezier(0.05, 0.8, 0.45, 0.95);
  });

  return (
    <>
      <div id="home" className="relative">
        <nav className="flex justify-between items-center px-10 py-6">
          {/* <nav className="flex justify-between items-center px-10 py-6"> */}
          {/* <motion.div whileHover={{ scale: 1.2 }}> */}
          <a href="#home">
            <motion.div whileTap={{ scale: 0.9 }}>
              <Image
                src="globe.svg"
                width={36}
                height={36}
                alt={"bithacks logo"}
              />
            </motion.div>
          </a>
          <motion.div
            className="md:hidden"
            whileTap={{ scale: 0.9 }}
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
          <div className="md:flex md:gap-8 md:justify-end md:w-fit max-md:hidden">
            <a href="#about">About</a>
            <a href="#tracks">Tracks</a>
            <a href="#faq">FAQ</a>
            <a href="#sponsors">Sponsors</a>
            <a href="#team">Team</a>
          </div>
        </nav>
        <div>
          <AnimatePresence>
            {navbarOpen && (
              <motion.div
                initial={{ opacity: 0, y: 0 }}
                animate={{ opacity: 1, y: 20 }}
                exit={{ opacity: 0, y: 0 }}
                transition={{
                  duration: 0.25,
                  ease: bezier,
                  type: "spring",
                }}
                className="absolute right-10 md:hidden"
              >
                <ul className="bg-purple-700 flex flex-col text-right px-8 py-4 w-fit gap-8">
                  <a href="#about">About</a>
                  <a href="#tracks">Tracks</a>
                  <a href="#faq">FAQ</a>
                  <a href="#sponsors">Sponsors</a>
                  <a href="#team">Team</a>
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
};

export default Navbar;
