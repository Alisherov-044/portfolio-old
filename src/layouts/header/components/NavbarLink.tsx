import Link from "next/link";
import { Events, NavbarLinkInterface } from "@/utils/types";

export function NavbarLink({
  text,
  link,
  onClick,
}: NavbarLinkInterface & Pick<Events, "onClick">) {
  return (
    <Link href={link} className="navbar__link" onClick={onClick}>
      {text}
    </Link>
  );
}
