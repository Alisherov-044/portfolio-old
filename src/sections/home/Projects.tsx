import { Section } from "@/layouts";
import { Button, Project } from "@/components";
import { useProjectsContext } from "@/context";

export function Projects() {
  const { projects } = useProjectsContext();

  return (
    <Section
      id="projects"
      className="projects__section"
      slug="My Projects"
      title="Work that I've done for the past years"
    >
      {projects.map((project) => (
        <Project project={project} key={project.id} />
      ))}
      <div className="projects__section--button__wrapper">
        <Button variant="primary-outline" className="projects__section--button">
          View All Projects
        </Button>
      </div>
    </Section>
  );
}
