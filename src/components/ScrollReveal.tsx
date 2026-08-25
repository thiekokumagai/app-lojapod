import React, { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right";
  className?: string;
}

const offsets = {
  up: { x: 0, y: 56 },
  left: { x: -48, y: 20 },
  right: { x: 48, y: 20 },
};

export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  delay = 0,
  direction = "up",
  className,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.12, margin: "0px 0px -8% 0px" });
  const reduceMotion = useReducedMotion();
  const offset = reduceMotion ? { x: 0, y: 0 } : offsets[direction];

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, ...offset, filter: reduceMotion ? "none" : "blur(8px)" }}
      animate={
        isInView
          ? { opacity: 1, x: 0, y: 0, filter: "blur(0px)" }
          : { opacity: 0, ...offset, filter: reduceMotion ? "none" : "blur(8px)" }
      }
      transition={{
        duration: reduceMotion ? 0.01 : 0.75,
        delay: reduceMotion ? 0 : delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
