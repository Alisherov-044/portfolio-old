import Image from "next/image";
import { Section } from "@/layouts";
import { motion } from "framer-motion";
import { FadeIn } from "@/utils/animations";

export function Hero() {
  return (
    <Section id="hero" className="hero__section" full>
      <div className="bg-panel" />
      <motion.div
        variants={FadeIn("-100vw")}
        initial="hidden"
        animate="visible"
        transition={FadeIn().transition()}
        className="hero-image"
      >
        <Image src="/heroImage.svg" width={700} height={600} alt="hero image" />
      </motion.div>
      <div className="about">
        <motion.h1
          variants={FadeIn("100vw")}
          initial="hidden"
          animate="visible"
          transition={FadeIn().transition()}
          className="title"
        >
          {`I'm Sadulla Alisherov. A Web developer`}{" "}
          <span className="dark">based in Uzbekistan.</span>
        </motion.h1>
        <motion.p
          variants={FadeIn("100vw")}
          initial="hidden"
          animate="visible"
          transition={FadeIn().transition(1.7)}
          className="description"
        >
          {`I'm the small developer with big desire and dream. My wish in the
          future is to create my own framework that everyone can use it to
          creaet better user interfaces`}
        </motion.p>
      </div>
    </Section>
  );
}
