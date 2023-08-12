export const FadeIn = (x?: number | string) => {
  return {
    hidden: {
      x,
    },
    visible: {
      x: 0,
    },
    transition: (duration: number = 1) => ({
      type: "tween",
      ease: "easeOut",
      duration,
    }),
  };
};
