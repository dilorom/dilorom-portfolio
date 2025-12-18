import React from "react";
import { motion } from "framer-motion";
import useScrollAnimation from "../../hooks/useScrollAnimation";

const SectionWrapper = ({ id, children, className = "" }) => {
  const { ref, controls, animationVariants } = useScrollAnimation();

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={animationVariants}
      transition={{ duration: 0.8 }}
      className={`section-padding ${className}`}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
