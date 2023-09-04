import { doIf } from "@/utils";
import { Logo } from "@/components";
import { NavbarLink } from "./components";
import { adminNavbarLinks, navbarLinks } from "@/data";
import { BurgerIcon } from "@/assets/icons";
import { useAdminRouter, useNavbar } from "@/hooks";

export function Header() {
  const { isOpen, close, toggle } = useNavbar();
  const { isAdmin } = useAdminRouter();

  const links = isAdmin ? adminNavbarLinks : navbarLinks;

  return (
    <header className="header">
      <nav className="navbar">
        <Logo />
        <ul className={`navbar__links ${doIf(isOpen, "open", "close")}`}>
          {links.map((navbarLink) => (
            <NavbarLink
              navbarLink={navbarLink}
              key={navbarLink.id}
              onClick={close}
            />
          ))}
        </ul>
        <BurgerIcon className="burger-icon" onClick={toggle} />
      </nav>
    </header>
  );
}
