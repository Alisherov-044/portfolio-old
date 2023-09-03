import { Container, SectionHeader } from "@/components";
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
  sm,
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
      {full ? (
        <>
          {Header}
          {children}
        </>
      ) : (
        <Container sm={sm}>
          {Header}
          {children}
        </Container>
      )}
    </section>
  );
}
