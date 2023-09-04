import { Section } from "@/layouts";
import { Specification } from "@/components";
import { useSpecificationsContext } from "@/context";

export function Specifications() {
  const { specifications } = useSpecificationsContext();

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
