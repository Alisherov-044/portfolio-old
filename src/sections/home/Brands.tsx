import { Section } from "@/layouts";
import { Brand } from "@/components";
import { useBrandsScroll } from "@/hooks/useBrandsScroll";

export function Brands() {
  const { brandsLogo, pixel } = useBrandsScroll();

  return (
    <Section className="brands__section" full>
      <ul className="brands__wrapper">
        {brandsLogo.map((brand, index) => (
          <Brand icon={brand} animationPixel={pixel} key={index} />
        ))}
      </ul>
    </Section>
  );
}
