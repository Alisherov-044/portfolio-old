import Link from "next/link";
import { Section } from "@/layouts";

export function About() {
  return (
    <Section
      className="about__section"
      title="Philosophy & values"
      description="I'm Sadulla Alisherov web developer graduated Data Learning Center. I have knowledge in both Frontend and Backend as well as Creating APIs and using it in Frontend"
      button={
        <Link
          href="/resume.pdf"
          target="_blank"
          className="section__header--button button secondary"
          download="/resume.pdf"
        >
          More about me
        </Link>
      }
      full
    >
      <div className="about-bg">
        <img src="/about.jpg" alt="about img" />
      </div>
    </Section>
  );
}
