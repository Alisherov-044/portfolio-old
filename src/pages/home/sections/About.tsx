import Link from "next/link";
import { Section } from "@/layouts";

export function About() {
  const { title, description, button } = {
    title: "Philosophy & values",
    description:
      "I think everyone wants the same thing - relationship with humanity, peace with the metaphysical, and experience with the universe. I try to grasp these things with my values: authenticity, creativity, & hospitality.",
    button: (
      <Link href="#" className="section__header--button button secondary">
        More about me
      </Link>
    ),
  };

  return (
    <Section
      className="about__section"
      title={title}
      description={description}
      button={button}
      full
    >
      <div className="about-bg">
        <img src="/about.jpg" alt="about img" />
      </div>
    </Section>
  );
}
