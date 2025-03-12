import { Variants } from "framer-motion";

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Slide up animation
export const slideUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { 
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Slide in from right
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 20 },
  visible: { 
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Scale up animation
export const scaleUp: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1,
    scale: 1,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

// Stagger children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Container for scroll-triggered animations
export const scrollContainer: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.2
    }
  }
};

// List item animation
export const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

// Card hover animation
export const cardHover: Variants = {
  rest: {
    scale: 1,
    y: 0,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  hover: {
    scale: 1.02,
    y: -5,
    transition: { duration: 0.2, ease: "easeOut" }
  }
};

// Button hover animation
export const buttonHover: Variants = {
  rest: { scale: 1 },
  hover: { 
    scale: 1.05,
    transition: { duration: 0.2, ease: "easeOut" }
  },
  tap: { 
    scale: 0.95,
    transition: { duration: 0.1, ease: "easeOut" }
  }
};

// Reduced motion preferences
export const prefersReducedMotion = typeof window !== 'undefined' 
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
  : false;

// Animation settings based on user preferences
export const getAnimationSettings = (variants: Variants) => ({
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-100px" },
  variants: prefersReducedMotion ? fadeIn : variants
});