import { ReactNode } from "react";

export interface SpecificationScheme {
  id: number;
  index: number;
  title: string;
  description: string;
  color: string;
}

export interface SkillSetScheme {
  id: number;
  icon: string;
  title: string;
  description: string;
  link?: string;
}

export interface SocialNetworkScheme {
  id: number;
  link: Url;
  icon: string;
}

export interface NavbarLinkScheme {
  id: number;
  text: string;
  link: Url;
}

export interface ProjectScheme {
  id: number;
  image: string;
  title: string;
  description: string;
  link: string;
}

interface ActionsInterface<T> {
  onDelete: (id: number) => void;
  onEdit: (data: T) => void;
}
