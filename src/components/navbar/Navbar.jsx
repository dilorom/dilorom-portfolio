import React, { useState } from "react";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "about" },
    { name: "Projects", href: "projects" },
    { name: "Skills", href: "skills" },
    { name: "Contact", href: "contact" },
  ];

  // Scroll to section smoothly
  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); // close mobile menu if open
  };

  return (
    <>
      {/* Main navbar */}
      <nav className="fixed top-0 left-0 w-full h-20 bg-white/80 dark:bg-slate-900/70 backdrop-blur-lg shadow-sm z-50 flex items-center px-6 md:px-10">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Dilorom
        </h1>

        {/* Desktop nav */}
        <ul className="hidden md:flex ml-auto gap-8 text-lg font-medium text-gray-800 dark:text-gray-200">
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavClick(link.href)}
                className="hover:text-blue-600 transition-colors duration-300"
              >
                {link.name}
              </button>
            </li>
          ))}
          {/* Desktop Theme Toggle */}
          <li>
            <ThemeToggle />
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="ml-auto md:hidden text-3xl text-gray-800 dark:text-gray-200"
          onClick={() => setOpen(true)}
          aria-label="Open Menu"
        >
          <FiMenu />
        </button>
      </nav>

      {/* Mobile Menu */}
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Navbar;
