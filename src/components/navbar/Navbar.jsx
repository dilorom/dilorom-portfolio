import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "about", activeColor: "hover:text-cyan-400 decoration-cyan-400" },
    { name: "Projects", href: "projects", activeColor: "hover:text-purple-400 decoration-purple-400" },
    { name: "Skills", href: "skills", activeColor: "hover:text-pink-400 decoration-pink-400" },
    { name: "Contact", href: "contact", activeColor: "hover:text-amber-400 decoration-amber-400" },
  ];

  const handleNavClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setOpen(false); 
  };

  return (
    <>
      {/* Container wrapper to add spacing around the floating header */}
      <div className="fixed top-0 left-0 w-full p-4 z-50 flex justify-center">
        
        {/* Floating Navbar with rounded corners and an all-around cyan neon glow */}
        <nav className="w-full max-w-6xl h-20 bg-slate-950/80 backdrop-blur-lg flex items-center px-6 md:px-10 justify-between
          rounded-full border-2 border-cyan-500/40 shadow-[0_0_20px_rgba(34,211,238,0.15)]">
          
          {/* Brand Logo - Scaled nicely with the links */}
          <h1 className="text-2xl font-bold tracking-tight text-white select-none">
            <span className="text-cyan-400">*Dilorom*</span>
          </h1>

          {/* Desktop & Tablet Navigation - Text size increased to text-base / text-lg */}
          <ul className="hidden md:flex items-center gap-10 text-base lg:text-lg font-semibold tracking-wide text-gray-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`transition-all duration-300 underline-offset-8 hover:underline decoration-2 ${link.activeColor}`}
                >
                  {link.name}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Hamburger Button */}
          <button
            className="md:hidden text-3xl text-gray-300 hover:text-white transition-colors p-1"
            onClick={() => setOpen(true)}
            aria-label="Open Menu"
          >
            <FiMenu />
          </button>
        </nav>
      </div>

      {/* Mobile Drawer Menu Component */}
      <MobileMenu open={open} setOpen={setOpen} navLinks={navLinks} handleNavClick={handleNavClick} />
    </>
  );
};

export default Navbar;