import { motion } from "framer-motion";
import { BrandInterface } from "@/utils/types";

export function Brand({ icon, animationPixel }: BrandInterface) {
  return (
    <motion.div
      className="brand__card"
      animate={{ x: `-${animationPixel}px` }}
      transition={{ type: "tween", duration: 0.1 }}
    >
      {icon}
    </motion.div>
  );
}
