import { Container, If, Or, Pick } from "@/components";
import { SectionInterface } from "@/utils/types";

export function Section({ children, className, full }: SectionInterface) {
  return (
    <section className={className}>
      <Pick state={!!full}>
        <If condition>{children}</If>
        <Or>
          <Container>{children}</Container>
        </Or>
      </Pick>
    </section>
  );
}
