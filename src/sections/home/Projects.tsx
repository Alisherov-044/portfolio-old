import Link from "next/link";
import { Section } from "@/layouts";
import { Project } from "@/components";
import { useProjectsContext } from "@/context";

export function Projects() {
  const { projects } = useProjectsContext();

  return (
    <Section
      id="projects"
      className="projects__section"
      slug="My Projects"
      title="Projects that I've done in the past"
    >
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
      <div className="projects__section--button__wrapper">
        <Link
          href="/projects"
          className="button primary-outline projects__section--button"
        >
          View All Projects
        </Link>
      </div>
    </Section>
  );
}
