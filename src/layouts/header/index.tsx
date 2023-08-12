import { Logo, For } from "@/components";
import { NavbarLink } from "./components";
import { navbarLinks } from "@/data";
import { doIf } from "@/utils";
import { NavbarLinkInterface } from "@/utils/types";
import { BurgerIcon } from "@/assets/icons";
import { useNavbar } from "@/hooks";

export function Header() {
  const { isOpen, close, toggle } = useNavbar();

  return (
    <header className="header">
      <nav className="navbar">
        <Logo />
        <ul className={`navbar__links ${doIf(isOpen, "open", "close")}`}>
          <For each="navbarLink" outIn={navbarLinks}>
            <NavbarLink {...({} as NavbarLinkInterface)} onClick={close} />
          </For>
        </ul>
        <BurgerIcon className="burger-icon" onClick={toggle} />
      </nav>
    </header>
  );
}
