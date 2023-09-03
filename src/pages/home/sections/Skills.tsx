import { Skill } from "@/components";
import { skills } from "@/data";
import { Section } from "@/layouts";

export function Skills() {
  return (
    <Section
      id="skillset"
      className="skills__section"
      title="Skillset"
      description="With skills in over 4 different fields of design, I am the perfect person to hire when it comes to a full fledged project. Whatever your needs are, I can pretty much take on any challenge."
    >
      <ul className="skills__card--wrapper">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </ul>
    </Section>
  );
}
