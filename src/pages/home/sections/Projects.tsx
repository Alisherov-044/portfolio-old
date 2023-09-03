import { Section } from "@/layouts";
import { Button, Project } from "@/components";

export function Projects() {
  return (
    <Section
      id="projects"
      className="projects__section"
      slug="My Projects"
      title="Work that I've done for the past years"
    >
      {[1, 2].map((index) => (
        <Project
          project={{
            image: "/projects/project-1.jpg",
            title: "Restaurant Website Design",
            description:
              "I worked with the guys at CBRE to redesign their entire website and mobile app fro both Android and iOS. This project lasted for 4 months and was a very challenging one.",
            link: "#",
          }}
          key={index}
        />
      ))}
      <div className="projects__section--button__wrapper">
        <Button variant="primary-outline" className="projects__section--button">
          View All Projects
        </Button>
      </div>
    </Section>
  );
}
