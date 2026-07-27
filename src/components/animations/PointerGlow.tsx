"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion } from "motion/react";

export function PointerGlow() {
  const x = useMotionValue(-300);
  const y = useMotionValue(-300);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const supportsPointer = window.matchMedia("(pointer: fine)").matches;

    if (shouldReduceMotion || !supportsPointer) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      x.set(event.clientX - 180);
      y.set(event.clientY - 180);
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [shouldReduceMotion, x, y]);

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-glow"
      style={{ x, y }}
    />
  );
}
