import React from "react";
import { motion } from "framer-motion";

const SkillIcon = ({ icon: Icon, label }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -5 }}
      className="
        flex flex-col items-center justify-center p-4 bg-white dark:bg-slate-800
        rounded-xl shadow-lg hover:shadow-2xl transition
      "
    >
      <Icon className="text-4xl text-blue-600 dark:text-blue-400 mb-2" />
      <span className="text-gray-700 dark:text-gray-200 font-medium">{label}</span>
    </motion.div>
  );
};

export default SkillIcon;
