import { Project } from "@/components";
import { useProjectsContext } from "@/context";
import { Section } from "@/layouts";

export function Main() {
  const { projects } = useProjectsContext();

  return (
    <Section slug="projects" title="All Projects">
      <div className="all-projects__wrapper">
        {projects.map((project) => (
          <Project project={project} />
        ))}
      </div>
    </Section>
  );
}
