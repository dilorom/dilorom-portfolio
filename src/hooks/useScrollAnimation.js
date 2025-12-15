import { useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export default function useScrollAnimation() {
  const ref = useRef(null);
  const controls = useAnimation();
  const inView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [inView, controls]);

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return { ref, controls, animationVariants };
}
