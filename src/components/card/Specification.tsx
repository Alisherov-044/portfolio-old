import { doIf } from "@/utils";
import { motion } from "framer-motion";
import { FadeIn } from "@/utils/animations";
import { SpecificationInterface } from "@/utils/types";

export function Specification({ specification }: SpecificationInterface) {
  let { index, title, description, color } = specification;

  index += 1;

  const style = { color };

  return (
    <motion.div
      variants={FadeIn("-20%")}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ ...FadeIn().transition(1), delay: (index - 1) * 0.2 }}
      className="specification__card"
    >
      <h1 className="card__index">{doIf(index > 9, index, `0${index}`)}</h1>
      <h4 className="card__title" style={style}>
        {title}
      </h4>
      <p className="card__description">{description}</p>
    </motion.div>
  );
}
