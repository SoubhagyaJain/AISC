import { Variants } from "framer-motion";

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } 
  }
};

export const fadeUpFast: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] } 
  }
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    }
  }
};

export const staggerContainerFast: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
    }
  }
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } 
  }
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1.0] } 
  }
};

export const chipReveal: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 8 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    y: 0, 
    transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1.0] } 
  }
};

export const pathDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1, 
    transition: { duration: 1.2, ease: "easeInOut" } 
  }
};

export const pathDrawFast: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { 
    pathLength: 1, 
    opacity: 1, 
    transition: { duration: 0.8, ease: "easeInOut" } 
  }
};

// Ambient loops
export const pulseGlow: Variants = {
  initial: { opacity: 0.5, scale: 0.98 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [0.98, 1.02, 0.98],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};
