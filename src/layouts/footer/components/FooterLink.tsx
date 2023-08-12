import Link from "next/link";
import { FooterLinkInterface } from "@/utils/types";

export function FooterLink({ text, link }: FooterLinkInterface) {
  return (
    <Link href={link} className="footer__link">
      {text}
    </Link>
  );
}
