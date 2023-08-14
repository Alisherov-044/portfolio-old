import { For, Specification } from "@/components";
import { Section } from "@/layouts";
import { specifications } from "@/data";
import { SpecificationInterface } from "@/utils/types";

export function Specifications() {
  const { slug, title } = {
    slug: "specification",
    title: "Specifications I have learnt in the past.",
  };

  return (
    <Section
      id="specification"
      className="specifications__section"
      slug={slug}
      title={title}
    >
      <ul className="specifications__wrapper">
        <For each="specification" outIn={specifications}>
          <Specification {...({} as SpecificationInterface)} />
        </For>
      </ul>
    </Section>
  );
}
