import { Container, If, Or, Pick, SectionHeader } from "@/components";
import { SectionHeaderInterface, SectionInterface } from "@/utils/types";

export function Section({
  children,
  className,
  id,
  slug,
  title,
  description,
  button,
  full,
}: SectionInterface & SectionHeaderInterface) {
  const Header = (
    <SectionHeader
      slug={slug}
      title={title}
      description={description}
      button={button}
    />
  );

  return (
    <section id={id} className={className}>
      <Pick state={!!full}>
        <If condition>
          {Header}
          {children}
        </If>
        <Or>
          <Container>
            {Header}
            {children}
          </Container>
        </Or>
      </Pick>
    </section>
  );
}
