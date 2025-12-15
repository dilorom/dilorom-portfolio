import React from "react";
import { motion } from "framer-motion";

const FloatingShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Shape 1 */}
      <motion.div
        className="absolute w-80 h-80 bg-blue-300/40 dark:bg-blue-500/30 rounded-full blur-3xl"
        initial={{ x: -100, y: -80 }}
        animate={{ x: 100, y: 40 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 8,
        }}
      />

      {/* Shape 2 */}
      <motion.div
        className="absolute w-72 h-72 bg-purple-300/40 dark:bg-purple-500/30 rounded-full blur-3xl"
        initial={{ x: 150, y: 100 }}
        animate={{ x: -60, y: 20 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 10,
        }}
      />

      {/* Shape 3 */}
      <motion.div
        className="absolute w-96 h-96 bg-pink-300/30 dark:bg-pink-500/30 rounded-full blur-3xl"
        initial={{ x: 60, y: 200 }}
        animate={{ x: 0, y: 120 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 12,
        }}
      />
    </div>
  );
};

export default FloatingShapes;
