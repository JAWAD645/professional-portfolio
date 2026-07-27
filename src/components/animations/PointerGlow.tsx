"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";

export function PointerGlow() {
  const pointerX = useMotionValue(-400);
  const pointerY = useMotionValue(-400);
  const glowX = useSpring(pointerX, {
    stiffness: 90,
    damping: 24,
    mass: 0.8,
  });
  const glowY = useSpring(pointerY, {
    stiffness: 90,
    damping: 24,
    mass: 0.8,
  });
  const indicatorX = useSpring(pointerX, {
    stiffness: 420,
    damping: 34,
    mass: 0.35,
  });
  const indicatorY = useSpring(pointerY, {
    stiffness: 420,
    damping: 34,
    mass: 0.35,
  });
  const [isInteractive, setIsInteractive] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const supportsPointer = window.matchMedia("(pointer: fine)").matches;

    if (shouldReduceMotion || !supportsPointer) {
      return;
    }

    const handleMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);

      const target = event.target;
      setIsInteractive(
        target instanceof Element &&
          Boolean(
            target.closest(
              "a, button, input, textarea, [data-pointer-reactive]",
            ),
          ),
      );
    };

    window.addEventListener("pointermove", handleMove, { passive: true });
    return () => window.removeEventListener("pointermove", handleMove);
  }, [pointerX, pointerY, shouldReduceMotion]);

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-glow"
        style={{ x: glowX, y: glowY }}
      />
      <motion.div
        aria-hidden="true"
        className={`pointer-indicator ${isInteractive ? "is-interactive" : ""}`}
        style={{ x: indicatorX, y: indicatorY }}
      >
        <span className="pointer-indicator-ring" />
        <span className="pointer-indicator-dot" />
      </motion.div>
    </>
  );
}
