"use client";

import type { PointerEvent as ReactPointerEvent } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  type HTMLMotionProps,
} from "motion/react";
import { motionConfig } from "@/lib/motion";

type GlowCardProps = HTMLMotionProps<"article">;

export function GlowCard({
  children,
  className = "",
  onPointerLeave,
  onPointerMove,
  style,
  ...props
}: GlowCardProps) {
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, motionConfig.spring);
  const rotateY = useSpring(tiltY, motionConfig.spring);
  const shouldReduceMotion = useReducedMotion();

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    onPointerMove?.(event);

    if (shouldReduceMotion || event.pointerType !== "mouse") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const relativeX = (event.clientX - bounds.left) / bounds.width;
    const relativeY = (event.clientY - bounds.top) / bounds.height;

    tiltX.set((0.5 - relativeY) * 5);
    tiltY.set((relativeX - 0.5) * 5);
    event.currentTarget.style.setProperty(
      "--pointer-x",
      `${Math.round(relativeX * 100)}%`,
    );
    event.currentTarget.style.setProperty(
      "--pointer-y",
      `${Math.round(relativeY * 100)}%`,
    );
  };

  const handlePointerLeave = (event: ReactPointerEvent<HTMLElement>) => {
    onPointerLeave?.(event);
    tiltX.set(0);
    tiltY.set(0);
  };

  return (
    <motion.article
      className={`glow-card ${className}`}
      data-pointer-reactive
      onPointerLeave={handlePointerLeave}
      onPointerMove={handlePointerMove}
      style={{
        ...style,
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      transition={motionConfig.spring}
      whileHover={
        shouldReduceMotion
          ? undefined
          : { y: -6, scale: motionConfig.hoverScale }
      }
      {...props}
    >
      {children}
    </motion.article>
  );
}
