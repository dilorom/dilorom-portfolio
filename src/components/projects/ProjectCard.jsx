import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, github, demo }) => {
  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      className="
        card-shadow p-6 rounded-xl flex flex-col justify-between
      "
    >
      <div>
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
          {title}
        </h3>
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {description}
        </p>
      </div>

      <div className="mt-4 flex gap-4">
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl"
        >
          <FaGithub />
        </a>
        {demo && (
          <a
            href={demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition text-2xl"
          >
            <FaExternalLinkAlt />
          </a>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
