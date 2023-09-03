import Link from "next/link";
import { SkillSetInterface } from "@/utils/types";

export function Skill({ skill }: SkillSetInterface) {
  const { icon, title, description, link } = skill;

  const content = (
    <>
      <div className="skill__card--icon">{icon}</div>
      <h2 className="skill__card--title">{title}</h2>
      <p className="skill__card--description">{description}</p>
    </>
  );

  return link ? (
    <Link href={link} target="_blank" className="skill__card">
      {content}
    </Link>
  ) : (
    <div className="skill__card">{content}</div>
  );
}
