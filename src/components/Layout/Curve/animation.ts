type AnimationVariant = {
  initial: Record<string, any>;
  enter: Record<string, any>;
  exit: Record<string, any>;
};

type CurveAnimation = {
  initialPath: string;
  targetPath: string;
};

export const text: AnimationVariant = {
  initial: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    top: -100,
    transition: {
      duration: 0.75,
      delay: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
    transitionEnd: { top: "47.5%" },
  },
  exit: {
    opacity: 1,
    top: "40%",
    transition: {
      duration: 0.5,
      delay: 0.4,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

export const curve = (
  initialPath: string,
  targetPath: string
): AnimationVariant => {
  return {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: {
        duration: 0.75,
        delay: 0.35,
        ease: [0.76, 0, 0.24, 1],
      },
    },
    exit: {
      d: initialPath,
      transition: {
        duration: 0.75,
        ease: [0.76, 0, 0.24, 1],
      },
    },
  };
};

export const translate: AnimationVariant = {
  initial: {
    top: "-300px",
  },
  enter: {
    top: "-100vh",
    transition: {
      duration: 0.75,
      delay: 0.35,
      ease: [0.76, 0, 0.24, 1],
    },
    transitionEnd: {
      top: "100vh",
    },
  },
  exit: {
    top: "-300px",
    transition: {
      duration: 0.75,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

// export const text = {
//     initial: {
//         opacity: 1,
//     },
//     enter: {
//         opacity: 0,
//         top: -100,
//         transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]},
//         transitionEnd: {top: "47.5%"}
//     },
//     exit: {
//         opacity: 1,
//         top: "40%",
//         transition: {duration: .5, delay: .4, ease: [0.33, 1, 0.68, 1]}
//     }
// }

// export const curve = (initialPath, targetPath) => {
//     return {
//         initial: {
//             d: initialPath
//         },
//         enter: {
//             d: targetPath,
//             transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]}
//         },
//         exit: {
//             d: initialPath,
//             transition: {duration: .75, ease: [0.76, 0, 0.24, 1]}
//         }
//     }
// }

// export const translate = {
//     initial: {
//         top: "-300px"
//     },
//     enter: {
//         top: "-100vh",
//         transition: {duration: .75, delay: .35, ease: [0.76, 0, 0.24, 1]},
//         transitionEnd : {
//             top: "100vh"
//         }
//     },
//     exit: {
//         top: "-300px",
//         transition: {duration: .75, ease: [0.76, 0, 0.24, 1]}
//     }
// }
