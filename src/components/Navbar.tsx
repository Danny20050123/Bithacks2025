"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, cubicBezier, AnimatePresence } from "motion/react";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  let bezier;
  useEffect(() => {
    bezier = cubicBezier(0.05, 0.8, 0.45, 0.95);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <div id="home" className="relative">
        <nav className="flex fixed w-[100vw] backdrop-blur-sm bg-[#332FAC]/65 justify-between z-10 items-center px-10 py-1">
          <button onClick={() => scrollToSection("home")}>
            <motion.div whileHover={{ scale: 1.2 }} whileTap={{ scale: 0.9 }}>
              <Image
                src="/bithacks_logo_black.svg"
                width={72}
                height={72}
                alt={"bithacks logo"}
              />
            </motion.div>
          </button>
          <motion.div
            className="fixed top-6 right-[120px] md:hidden"
            whileTap={{ scale: 0.9 }}
            onClick={() => {
              setNavbarOpen(!navbarOpen);
            }}
          >
            <Image
              className=""
              src="hamburger-menu.svg"
              width={36}
              height={36}
              alt={"three line menu"}
            />
          </motion.div>

          <div className="font-rethink md:flex md:gap-8 md:justify-end md:w-fit max-md:hidden text-white md:mr-[150px]">
            {["about", "tracks", "faq", "sponsors", "team"].map((id) => (
              <button key={id} onClick={() => scrollToSection(id)}>
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </button>
            ))}
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
                className="fixed z-10 top-20 right-10 md:hidden"
              >
                <ul className="font-rethink z-10 bg-[#4E55CD] text-white drop-shadow-lg rounded-lg flex flex-col text-right px-8 py-4 w-fit gap-8">
                  {["about", "tracks", "faq", "sponsors", "team"].map((id) => (
                    <button key={id} onClick={() => scrollToSection(id)}>
                      {id.charAt(0).toUpperCase() + id.slice(1)}
                    </button>
                  ))}
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
