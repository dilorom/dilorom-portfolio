import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe, FaPaperPlane } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    {
      href: "mailto:your-email@example.com",
      icon: <FaEnvelope />,
      styles: "border-cyan-500/30 text-cyan-400 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)]",
    },
    {
      href: "https://github.com/dilorom",
      icon: <FaGithub />,
      styles: "border-purple-500/30 text-purple-400 hover:border-purple-400 hover:shadow-[0_0_15px_rgba(192,132,252,0.4)]",
    },
    {
      href: "https://www.linkedin.com/in/dilorom-pardaeva/",
      icon: <FaLinkedin />,
      styles: "border-pink-500/30 text-pink-400 hover:border-pink-400 hover:shadow-[0_0_15px_rgba(244,63,94,0.4)]",
    },
    {
      href: "https://dilorom.github.io/dilorom-portfolio/",
      icon: <FaGlobe />,
      styles: "border-amber-500/30 text-amber-400 hover:border-amber-400 hover:shadow-[0_0_15px_rgba(251,191,36,0.4)]",
    },
    /*{
      href: "https://telegram.me",
      icon: <FaPaperPlane />,
      styles: "border-emerald-500/30 text-emerald-400 hover:border-emerald-400 hover:shadow-[0_0_15px_rgba(52,211,153,0.4)]",
    },*/
  ];

  return (
    <footer className="bg-slate-950 py-10 mt-20 border-t border-slate-900">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Copyright - Styled to match the button geometry and theme */}
        <p className="text-gray-400 text-xs font-medium tracking-wide order-2 md:order-1 px-5 py-2.5 rounded-full border border-cyan-400 bg-slate-900/40 backdrop-blur-sm shadow-inner">
          &copy; {new Date().getFullYear()} Dilorom. All rights reserved.
        </p>

        {/* Social Icons */}
        <div className="flex gap-4 order-1 md:order-2">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`
                w-12 h-12 
                flex items-center justify-center 
                rounded-full border-2 
                bg-slate-900/50 
                text-xl 
                transition-all duration-300 ease-in-out
                ${link.styles}
              `}
            >
              {link.icon}
            </a>
          ))}
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;