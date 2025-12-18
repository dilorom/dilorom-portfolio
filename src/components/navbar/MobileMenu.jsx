import React from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const MobileMenu = ({ open, setOpen }) => {
  const navLinks = [
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // Close mobile menu
  };

  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: open ? 0 : "100%" }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 right-0 w-64 h-full bg-white dark:bg-slate-900 shadow-xl z-50 p-6 flex flex-col
                  ${open ? "pointer-events-auto" : "pointer-events-none"}`}
    >
      {/* Close button */}
      <button
        className="self-end text-2xl mb-8 text-gray-800 dark:text-gray-200"
        onClick={() => setOpen(false)}
      >
        ✕
      </button>

      {/* Mobile nav links */}
      <nav className="flex flex-col gap-6 text-lg font-medium text-gray-800 dark:text-gray-200">
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => handleNavClick(link.href)}
            className="text-left hover:text-blue-600 transition-colors duration-300"
          >
            {link.name}
          </button>
        ))}
      </nav>

      {/* Theme toggle */}
      <div className="mt-auto">
        <ThemeToggle />
      </div>
    </motion.div>
  );
};

export default MobileMenu;
