import { Logo } from "@/components";
import { navbarLinks, socialNetworks } from "@/data";
import { FooterLink, SocialNetwork } from "./components";

export function Footer() {
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
