"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.2 });

  return (
    <motion.div
      className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-blue"
      style={{ scaleX: shouldReduceMotion ? scrollYProgress : scaleX }}
      aria-hidden="true"
    />
  );
}
