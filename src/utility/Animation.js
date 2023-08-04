export const heroImg = {
  hidden: {
    x: '-15vw',
    scale: 0.98,
    width: 0,
  },
  visible: {
    scale: 1.04,
    x: 0,
    width: '100%',
    transition: {
      delay: 0.4,
      duration: 1.3,
    },
  },
};

export const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};
export const textList = {
  hidden: {
    x: '15vw',
  },
  visible: {
    x: 0,
    transition: {
      duration: 1.2,
    },
  },
};

export const heroLeft = {
  hidden: {
    width: '0%',
  },
  visible: {
    width: '100%',
    transition: {
      duration: 1,
    },
  },
};
