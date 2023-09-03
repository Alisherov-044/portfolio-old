import { Url } from "url";
import { ComponentProps, ReactElement, ReactNode } from "react";
import {
  NavbarLinkScheme,
  ProjectScheme,
  SkillSetScheme,
  SocialNetworkScheme,
  SpecificationScheme,
} from "./types.scheme";

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
  navbarLink: NavbarLinkScheme;
}

/* Layouts -> Footer */

interface SocialNetworkInterface {
  socialNetwork: SocialNetworkScheme;
}

interface FooterLinkInterface {
  footerLink: NavbarLinkScheme;
}

/* Layouts -> Section */

interface SectionInterface {
  children: ReactNode;
  className?: string;
  id?: string;
  full?: boolean;
  sm?: boolean;
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
  sm?: boolean;
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
  variant?: "primary" | "primary-outline" | "secondary";
}

/* Components -> Card */

interface SpecificationInterface {
  specification: SpecificationScheme;
}

interface BrandInterface {
  icon: ReactNode;
  animationPixel: number;
}

interface SkillSetInterface {
  skill: SkillSetScheme;
}

interface ProjectInterface {
  project: ProjectScheme;
}

/* Components -> Form */

interface InputInterface extends Omit<ComponentProps<"input">, "id"> {
  id: string;
  register?: any;
}

interface FormInterface
  extends Omit<ComponentProps<"form">, "onSubmit" | "children"> {
  onSubmit: () => void;
  children: ReactNode;
  className?: string;
}

interface FormGroupInterface extends Omit<InputInterface, "label"> {
  label: string;
  textarea?: boolean;
}

interface TextAreaInterface {
  id: string;
  register?: any;
  rows?: number;
  cols?: number;
  className?: string;
}
