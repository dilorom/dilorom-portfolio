import React from "react";
import { motion } from "framer-motion";

const SkillIcon = ({ icon: Icon, label, glowStyles, isPython }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05, y: -5 }}
      transition={{ duration: 0.2 }}
      className={`
        flex flex-col items-center justify-center p-6 
        bg-slate-900/40 backdrop-blur-sm
        rounded-xl border-2
        transition-all duration-300
        ${glowStyles}
      `}
    >
      {/* If it's Python, apply amber/yellow text color, otherwise inherit the default glow style color */}
      <Icon 
        className={`text-5xl mb-3 transition-transform duration-300 ${
          isPython ? "text-amber-300" : ""
        }`} 
      />
      <span className="text-white font-medium text-sm tracking-wide">{label}</span>
    </motion.div>
  );
};

export default SkillIcon;