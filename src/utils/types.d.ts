import { Url } from "url";
import { ReactElement, ReactNode } from "react";
import { CardScheme } from "./types.scheme";

/* Events */

interface Events {
  onClick?: () => void;
  onHover?: () => void;
  onBlur?: () => void;
}

/* Layouts */

interface LayoutInterface {
  children: ReactNode;
}

/* Layouts -> Header */

interface NavbarLinkInterface {
  id?: number;
  text: string;
  link: Url;
}

/* Layouts -> Footer */

interface SocialNetworkInterface {
  id?: number;
  link: Url;
  icon: string;
}

interface FooterLinkInterface extends NavbarLinkInterface {}

/* Layouts -> Section */

interface SectionInterface {
  children: ReactNode;
  className?: string;
  id?: string;
  full?: boolean;
}

/* Components -> Statements */

interface IfInterface {
  condition: boolean | string | number;
  children: ReactNode;
}

interface OrInterface {
  children: ReactNode;
}

interface ForInterface {
  each?: string;
  outOf?: number[] | string[] | boolean[];
  outIn?: object[];
  children: ReactElement;
  propScheme?: string;
}

interface PickInterface {
  state: string | number | boolean;
  children: ReactElement[];
}

/* Components -> UI */

interface ContainerInterface {
  children: ReactNode;
}

interface SectionHeaderInterface {
  slug?: string;
  title?: string;
  description?: string;
  button?: ReactNode;
}

interface ButtonInterface {
  text?: string;
  children?: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
}

/* Components -> Card */

interface SpecificationInterface {
  id?: number;
  index: number;
  title: string;
  description: string;
}
