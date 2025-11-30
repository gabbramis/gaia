import { Variants } from "motion/react";

// Fade in from bottom with slide up
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

// Scale animation for images on scroll
export const scaleOnScroll: Variants = {
  hidden: { scale: 1.2, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

// Draw line animation (for SVG paths)
export const drawLine: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: {
    pathLength: 1,
    opacity: 1,
    transition: { duration: 1.5, ease: "easeInOut" },
  },
};

// Word/text reveal with slight slide
export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

// Fade in from left
export const fadeInLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Fade in from right
export const fadeInRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

// Simple fade in
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

// Rotate animation for decorative elements
export const rotate: Variants = {
  hidden: { rotate: 0 },
  visible: {
    rotate: 360,
    transition: {
      duration: 60,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Float animation for decorative elements
export const float: Variants = {
  hidden: { y: 0 },
  visible: {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Organic floating animation (vertical movement + rotation)
export const organicFloat: Variants = {
  hidden: { y: 0, rotate: 0, opacity: 0 },
  visible: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    opacity: 1,
    transition: {
      y: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
      rotate: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
      opacity: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  },
};

// Gradient shift animation (for animated backgrounds)
export const gradientShift: Variants = {
  hidden: { backgroundPosition: "0% 50%" },
  visible: {
    backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
    transition: {
      duration: 15,
      repeat: Infinity,
      ease: "linear",
    },
  },
};

// Glow pulse effect
export const glowPulse: Variants = {
  hidden: { opacity: 0.6 },
  visible: {
    opacity: [0.6, 1, 0.6],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Scale with glow (for hover effects)
export const scaleGlow: Variants = {
  hidden: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
};

// Custom easing functions
export const easings = {
  premium: [0.22, 1, 0.36, 1], // Smooth, elegant easing
  bounce: [0.68, -0.55, 0.265, 1.55], // Subtle bounce
  sharp: [0.4, 0, 0.2, 1], // Material design sharp
} as const;

// Deep editorial fade-in with elevation
export const deepFadeInUp: Variants = {
  hidden: { opacity: 0, y: 80, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: easings.premium,
      delay: 0.2
    },
  },
};

// Editorial reveal with 3D rotation
export const editorialReveal: Variants = {
  hidden: { opacity: 0, y: 60, rotateX: 15 },
  visible: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 1,
      ease: easings.premium,
    },
  },
};

// Stagger for editorial grid
export const staggerEditorial: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

// Viewport settings for scroll-triggered animations
export const defaultViewport = {
  once: true,
  margin: "-100px",
} as const;
