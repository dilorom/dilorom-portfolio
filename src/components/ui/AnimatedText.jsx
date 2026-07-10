import { motion } from "framer-motion";

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className="flex flex-col items-center justify-center mb-12 select-none">
      <motion.h4
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className={`text-3xl md:text-4xl font-light tracking-wide text-center text-gray-100 ${className}`}
      >
        {text}
      </motion.h4>

      {/* Thinner, Sleek Light Neon Blue Underline */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: "160px", opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
        className="h-[1.5px] mt-3 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.6)]"
      />
    </div>
  );
};

export default AnimatedText;