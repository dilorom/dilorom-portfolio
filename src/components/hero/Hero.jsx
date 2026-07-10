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
        bg-slate-950 text-white
        overflow-hidden
      "
    >
      {/* Floating neon background shapes */}
      <FloatingShapes />

      {/* TITLE with Profile Image */}
      <motion.h1
        className="relative z-10 flex flex-col items-center justify-center text-4xl sm:text-5xl md:text-6xl font-light tracking-wide drop-shadow-md gap-4"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {/* Row 1: Image next to Hello */}
        <div className="flex items-center gap-4 sm:gap-6 font-light text-gray-200">
          <div className="relative">
            <img
              src="/dilorom-portfolio/profile.jpg"  /* make sure your image is in public folder */
              alt="Dilorom"
              className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border-2 border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.2)] object-cover"
            />
          </div>
          <span className="text-4xl sm:text-5xl md:text-6xl opacity-90 font-bold">Hello,</span>
        </div>
        
        {/* Row 2: Name on its own line directly below */}
        <div className="flex justify-center w-full">
          <span className="text-3xl sm:text-4xl md:text-5xl text-cyan-400 font-normal mt-2 drop-shadow-[0_0_12px_rgba(34,211,238,0.35)]">
            I’m *Dilorom*,
          </span>
        </div>
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        className="relative z-10 text-md sm:text-lg md:text-xl max-w-xl sm:max-w-2xl mt-8 text-gray-400 font-light tracking-wide leading-relaxed"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        Web & Software Developer building secure, intuitive, and visually engaging digital experiences using modern technologies.
      </motion.p>

      {/* CTA BUTTON */}
      <motion.a
        href="#projects"
        className="
          relative z-10
          mt-10 px-8 py-3 text-sm sm:text-base font-semibold tracking-wide rounded-full
          border-2 bg-slate-900/50 
          transition-all duration-300 ease-in-out
          border-cyan-500/30 text-cyan-400 
          hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]
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