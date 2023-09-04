import { Logo } from "@/components";
import { navbarLinks } from "@/data";
import { FooterLink, SocialNetwork } from "./components";
import { useSocialNetworksContext } from "@/context";

export function Footer() {
  const { socialNetworks } = useSocialNetworksContext();

  return (
    <footer className="footer">
      <div className="container">
        <div className="social__networks">
          <Logo />
          <ul className="social__icons">
            {socialNetworks.map((socialIcon) => (
              <SocialNetwork socialNetwork={socialIcon} key={socialIcon.id} />
            ))}
          </ul>
        </div>
        <ul className="footer__links">
          {navbarLinks.map((footerLink) => (
            <FooterLink footerLink={footerLink} key={footerLink.id} />
          ))}
        </ul>
      </div>
    </footer>
  );
}
