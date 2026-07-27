"use client";

import { motion } from "motion/react";
import { motionConfig } from "@/lib/motion";

type RevealTextProps = {
  text: string;
  className?: string;
};

export function RevealText({ text, className }: RevealTextProps) {
  const words = text.split(" ");

  return (
    <span aria-label={text} className={className}>
      <span aria-hidden="true">
        {words.map((word, index) => (
          <motion.span
            className="reveal-word"
            initial={{ opacity: 0, y: "0.65em" }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.18 + index * 0.055,
              duration: 0.58,
              ease: motionConfig.ease,
            }}
            key={`${word}-${index}`}
          >
            {word}
            {index < words.length - 1 ? "\u00a0" : null}
          </motion.span>
        ))}
      </span>
    </span>
  );
}
