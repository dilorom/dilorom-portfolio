import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  github,
  demo,
  image,
  glowStyles, 
}) => {
  return (
    <motion.a
      href={demo || github}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.02 }}
      className={`
        relative
        rounded-xl
        overflow-hidden
        min-h-[350px]
        flex
        flex-col
        justify-between
        p-6
        backdrop-blur-lg
        border-2
        transition-all
        duration-300
        cursor-pointer
        ${glowStyles} 
      `}
    >
      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-cover bg-center
          scale-110
          blur-[1px]
        "
        style={{
          backgroundImage: `url(${image})`,
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-between h-full">
        <div>
          {/* The <h3> uses the inherited neon text color for its underline, 
            while the <span> inside keeps the actual text crisp white.
          */}
          <h3 className="text-xl font-semibold mb-3 underline decoration-current decoration-2 underline-offset-4">
            <span className="text-white">{title}</span>
          </h3>

          <p className="text-gray-200 text-sm leading-relaxed">
            {description}
          </p>
        </div>

        {/* GitHub Link */}
        <div className="mt-4 flex gap-4">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="
              w-10 h-10 
              flex items-center justify-center 
              rounded-full border border-current 
              bg-slate-950/60 
              text-lg
              text-white
              hover:bg-slate-950
              transition-colors
              duration-300
            "
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </motion.a>
  );
};

export default ProjectCard;