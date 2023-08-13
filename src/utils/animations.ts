export const FadeIn = (x?: number | string) => ({
  hidden: {
    x,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
  transition: (duration: number = 1.5) => ({
    type: "spring",
    bounce: 0,
    duration,
  }),
});
