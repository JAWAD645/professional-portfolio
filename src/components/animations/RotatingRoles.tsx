"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { motionConfig } from "@/lib/motion";

export function RotatingRoles({ roles }: { roles: readonly string[] }) {
  const [index, setIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (shouldReduceMotion || roles.length < 2) {
      return;
    }

    const interval = window.setInterval(() => {
      setIndex((current) => (current + 1) % roles.length);
    }, 2600);

    return () => window.clearInterval(interval);
  }, [roles, shouldReduceMotion]);

  return (
    <span className="role-rotator" aria-live="polite">
      <span className="role-prompt" aria-hidden="true">
        &gt;
      </span>
      <AnimatePresence initial={false} mode="wait">
        <motion.span
          key={roles[index]}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{
            duration: motionConfig.fastDuration,
            ease: motionConfig.ease,
          }}
        >
          {roles[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
