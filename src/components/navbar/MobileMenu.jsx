import React from "react";
import { motion } from "framer-motion";

const MobileMenu = ({ open, setOpen, navLinks, handleNavClick }) => {
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: open ? 0 : "100%" }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
      className={`fixed top-0 right-0 w-64 h-full bg-slate-950 border-l border-slate-900 shadow-2xl z-50 p-6 flex flex-col
                  ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Clean Close cross layout button */}
      <button
        className="self-end text-xl font-light mb-10 text-gray-400 hover:text-white transition-colors w-8 h-8 rounded-full border border-slate-800 flex items-center justify-center bg-slate-900/40"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>

      {/* Mobile Navigation Links */}
      <nav className="flex flex-col gap-6 text-lg font-medium text-gray-300">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNavClick(link.href)}
            className={`text-left transition-all duration-300 pl-2 border-l-2 border-transparent ${link.activeColor.split(' ')[0]} hover:border-current`}
          >
            {link.name}
          </button>
        ))}
      </nav>
    </motion.div>
  );
};

export default MobileMenu;