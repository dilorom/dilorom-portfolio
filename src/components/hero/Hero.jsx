import React from "react";
import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        relative h-screen flex flex-col items-center justify-center
        text-center px-6 sm:px-12 pt-32
        bg-gradient-to-b from-blue-100 to-blue-200
        dark:from-slate-800 dark:to-slate-900
        text-gray-900 dark:text-white
        overflow-hidden
      "
    >
      {/* Floating shapes */}
      <FloatingShapes />

      {/* TITLE with Profile Image */}
      <motion.h1
        className="flex flex-col items-center justify-center text-4xl sm:text-5xl md:text-6xl font-medium drop-shadow-md gap-2"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Line 1: Hi, with profile image */}
        <div className="flex items-center gap-4">
          <img
            src="/profile.jpg"  /* make sure your image is in public folder */
            alt="Dilorom"
            className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-accent-light dark:border-accent-dark object-cover"
          />
          <span className ="font-bold">Hello, </span><span className=" text-2xl sm:text-3xl md:text-4xl text-[#800080] dark:text-[#D8BFD8]">I’m Dilorom.</span>
        </div>

        {/* Line 2: Name */}
        
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        className="text-md sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mt-4 text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        IT Specialist & Software Developer crafting secure, user-centered, and
        beautifully designed digital experiences with modern technologies.
      </motion.p>

      {/* CTA BUTTON */}
      <motion.a
        href="#projects"
        className="
          mt-10 px-6 sm:px-8 py-3 text-md sm:text-lg rounded-lg shadow-lg text-white
          bg-blue-500 hover:bg-[#EAB8EA]  /* hover changes to light purple */
          dark:bg-blue-500 dark:hover:bg-[#D8BFD8]
          transition font-medium
        "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        View My Work
      </motion.a>
    </section>
  );
};

export default Hero;
