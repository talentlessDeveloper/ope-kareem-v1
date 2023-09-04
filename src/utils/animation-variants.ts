import { easeInOut } from 'framer-motion';

export const headerVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.5,
      duration: 0.5,
      delay: 2.5,
      ease: 'easeInOut',
      // when: "beforeChildren",
      // duration: 5,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const headerTextSlideUp = {
  hidden: { y: 200 },
  visible: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
      // delay: 0.5,
    },
  },
};

export const homeVariant = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
      staggerChildren: 0.25,
      duration: 1,
      ease: 'easeInOut',
      // when: "beforeChildren",
      // duration: 5,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const textVariant = {
  hidden: {
    y: 300,
  },
  visible: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 1.5,
    },
  },
};

export const clipPathVariant = {
  hidden: {
    scale: 1,
  },
  visible: {
    scale: 0,
    transition: {
      ease: easeInOut,
      duration: 0.85,
    },
  },
  exit: {
    scaleX: 0,
  },
};

export const imgVariant = {
  hidden: {
    y: 500,
  },
  visible: {
    y: 0,
    transition: {
      ease: [0.6, 0.01, -0.05, 0.95],
      duration: 0.5,
      // delay: 0.5,
    },
  },
};
