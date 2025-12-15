import React from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const MobileMenu = ({ open, setOpen }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: open ? 0 : "100%" }}
      transition={{ duration: 0.4 }}
      className="fixed top-0 right-0 w-64 h-full bg-white dark:bg-slate-900 shadow-xl z-50 p-6 flex flex-col"
    >
      <button
        className="self-end text-2xl mb-8 text-gray-800 dark:text-gray-200"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>

      <nav className="flex flex-col gap-6 text-lg font-medium text-gray-800 dark:text-gray-200">
        <a href="#about" onClick={() => setOpen(false)} className="hover:text-blue-600">About</a>
        <a href="#projects" onClick={() => setOpen(false)} className="hover:text-blue-600">Projects</a>
        <a href="#skills" onClick={() => setOpen(false)} className="hover:text-blue-600">Skills</a>
        <a href="#contact" onClick={() => setOpen(false)} className="hover:text-blue-600">Contact</a>
      </nav>

      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
