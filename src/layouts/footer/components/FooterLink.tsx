import Link from "next/link";
import { FooterLinkInterface } from "@/utils/types";

export function FooterLink({ footerLink }: FooterLinkInterface) {
  const { text, link } = footerLink;

  return (
    <Link href={link} className="footer__link">
      {text}
    </Link>
  );
}
