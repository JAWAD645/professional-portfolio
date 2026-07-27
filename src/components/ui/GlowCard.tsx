"use client";

import { motion, type HTMLMotionProps } from "motion/react";
import { motionConfig } from "@/lib/motion";

type GlowCardProps = HTMLMotionProps<"article">;

export function GlowCard({
  children,
  className = "",
  ...props
}: GlowCardProps) {
  return (
    <motion.article
      className={`glow-card ${className}`}
      transition={motionConfig.spring}
      whileHover={{ y: -6, scale: motionConfig.hoverScale }}
      {...props}
    >
      {children}
    </motion.article>
  );
}
