import { motion, useScroll } from "framer-motion";

export function ProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
  );
}
