import { Logo } from "@/components";
import { NavbarLink } from "./components";
import { navbarLinks } from "@/data";
import { doIf } from "@/utils";
import { BurgerIcon } from "@/assets/icons";
import { useNavbar } from "@/hooks";

export function Header() {
  const { isOpen, close, toggle } = useNavbar();

  return (
    <header className="header">
      <nav className="navbar">
        <Logo />
        <ul className={`navbar__links ${doIf(isOpen, "open", "close")}`}>
          {navbarLinks.map((navbarLink) => (
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
