import { Logo, For } from "@/components";
import { navbarLinks, socialNetworks } from "@/data";
import { FooterLink, SocialNetwork } from "./components";
import { FooterLinkInterface, SocialNetworkInterface } from "@/utils/types";

export function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="social__networks">
          <Logo />
          <ul className="social__icons">
            <For each="socialIcon" outIn={socialNetworks}>
              <SocialNetwork {...({} as SocialNetworkInterface)} />
            </For>
          </ul>
        </div>
        <ul className="footer__links">
          <For each="footerLink" outIn={navbarLinks}>
            <FooterLink {...({} as FooterLinkInterface)} />
          </For>
        </ul>
      </div>
    </footer>
  );
}
