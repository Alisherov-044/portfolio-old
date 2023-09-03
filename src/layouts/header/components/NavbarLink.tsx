import Link from "next/link";
import { Events, NavbarLinkInterface } from "@/utils/types";

export function NavbarLink({
  navbarLink,
  onClick,
}: NavbarLinkInterface & Pick<Events, "onClick">) {
  const { text, link } = navbarLink;

  return (
    <Link href={link} className="navbar__link" onClick={onClick}>
      {text}
    </Link>
  );
}
