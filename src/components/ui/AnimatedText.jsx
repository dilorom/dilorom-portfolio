import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "" }) => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`text-4xl font-bold text-center mb-10 ${className}`}
    >
      {text}
    </motion.h2>
  );
};

export default AnimatedText;
