"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { motionConfig } from "@/lib/motion";

type AnimatedSectionProps = HTMLMotionProps<"div"> & {
  delay?: number;
};

export function AnimatedSection({
  children,
  className,
  delay = 0,
  ...props
}: AnimatedSectionProps) {
  return (
    <motion.div
      className={className}
      initial={{
        opacity: 0,
        scale: 0.985,
        y: motionConfig.entranceDistance,
      }}
      transition={{
        duration: motionConfig.duration,
        delay,
        ease: motionConfig.ease,
      }}
      viewport={motionConfig.viewport}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      {...props}
    >
      {children}
    </motion.div>
  );
}
