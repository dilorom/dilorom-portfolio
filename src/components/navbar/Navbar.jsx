import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Main navbar */}
      <nav className="fixed top-0 left-0 w-full h-20 bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg shadow-sm z-40 flex items-center px-10">
        
        {/* LOGO */}
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dilorom
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10 ml-auto text-lg font-medium text-gray-800 dark:text-gray-200">
          <li><a href="#about" className="hover:text-blue-600">About</a></li>
          <li><a href="#projects" className="hover:text-blue-600">Projects</a></li>
          <li><a href="#skills" className="hover:text-blue-600">Skills</a></li>
          <li><a href="#contact" className="hover:text-blue-600">Contact</a></li>
        </ul>

        {/* Desktop theme toggle */}
        <div className="hidden md:block ml-8">
          <ThemeToggle />
        </div>

        {/* Mobile menu button */}
        <button
          className="block md:hidden ml-auto text-3xl text-gray-800 dark:text-gray-200"
          onClick={() => setOpen(true)}
        >
          <FiMenu />
        </button>
      </nav>

      {/* Mobile drawer */}
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
