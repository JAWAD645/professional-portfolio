export const motionConfig = {
  ease: [0.22, 1, 0.36, 1] as const,
  duration: 0.65,
  fastDuration: 0.25,
  stagger: 0.08,
  entranceDistance: 28,
  hoverScale: 1.015,
  viewport: { once: true, amount: 0.18 },
  spring: { stiffness: 240, damping: 24, mass: 0.8 },
} as const;
