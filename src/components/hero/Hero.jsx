import React from "react";
import { motion } from "framer-motion";
import FloatingShapes from "./FloatingShapes";

const Hero = () => {
  return (
    <section
      id="hero"
      className="
        relative h-screen flex flex-col items-center justify-center 
        text-center px-6 pt-32 
        bg-gradient-to-b from-blue-100 to-blue-200
        dark:from-slate-800 dark:to-slate-900
        text-gray-900 dark:text-white
        overflow-hidden
      "
    >
      {/* Floating shapes */}
      <FloatingShapes />

      {/* TITLE */}
      <motion.h1
        className="text-6xl font-extrabold drop-shadow-sm leading-tight"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi, I’m <span className="text-blue-700 dark:text-blue-400">Dilorom</span>
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        className="text-xl max-w-3xl mt-4 text-gray-700 dark:text-gray-300"
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
        className="mt-10 px-8 py-3 text-lg rounded-lg shadow-lg text-white
                   bg-blue-600 hover:bg-blue-700
                   dark:bg-blue-500 dark:hover:bg-blue-600
                   transition font-medium"
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
