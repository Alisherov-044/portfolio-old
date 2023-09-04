import { Skill } from "@/components";
import { useSkillsetContext } from "@/context";
import { Section } from "@/layouts";

export function Skills() {
  const { skills } = useSkillsetContext();

  return (
    <Section
      id="skillset"
      className="skills__section"
      title="Skillset"
      description="There are i mentioned my top for skills that i can proud of. Of course they are not all what i know but the most important ones."
    >
      <ul className="skills__card--wrapper">
        {skills.map((skill) => (
          <Skill skill={skill} key={skill.id} />
        ))}
      </ul>
    </Section>
  );
}
