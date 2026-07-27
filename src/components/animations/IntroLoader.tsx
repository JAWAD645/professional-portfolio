"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { portfolio } from "@/data/portfolio";

export function IntroLoader() {
  const [visible, setVisible] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timeout = window.setTimeout(
      () => setVisible(false),
      shouldReduceMotion ? 0 : 1150,
    );
    return () => window.clearTimeout(timeout);
  }, [shouldReduceMotion]);

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          aria-hidden="true"
          className="intro-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <div className="loader-mark">
            <span>{portfolio.initials}</span>
            <motion.i
              animate={{ scaleX: [0, 1] }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            />
          </div>
          <p>Compiling portfolio signals</p>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
