import React from "react";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  title,
  description,
  github,
  demo,
  image,
}) => {
  return (
    <motion.a
      href={demo || github}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ y: -5, scale: 1.02 }}
      className="
        relative
        rounded-xl
        overflow-hidden
        min-h-[350px]
        flex
        flex-col
        justify-between
        p-6
        text-white
        backdrop-blur-lg
        border border-white/10
        shadow-2xl
        hover:shadow-blue-500/20
        transition
        cursor-pointer
      "
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
          <h3 className="text-xl font-semibold text-white mb-2">
            {title}
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
              text-white
              hover:text-blue-400
              transition
              text-2xl
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