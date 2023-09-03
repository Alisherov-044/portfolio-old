import { Section } from "@/layouts";
import { specifications } from "@/data";
import { Specification } from "@/components";

export function Specifications() {
  return (
    <Section
      id="specification"
      className="specifications__section"
      slug="specification"
      title="Specifications I have learnt in the past."
    >
      <ul className="specifications__wrapper">
        {specifications.map((specification, index) => (
          <Specification
            specification={{ ...specification, index }}
            key={specification.id}
          />
        ))}
      </ul>
    </Section>
  );
}
