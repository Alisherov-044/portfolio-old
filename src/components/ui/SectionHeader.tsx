import { SectionHeaderInterface } from "@/utils/types";
import { If } from "..";

export function SectionHeader({
  slug,
  title,
  description,
  button,
}: SectionHeaderInterface) {
  return (
    <div className="section__header">
      <div className="text__wrapper">
        <If condition={!!slug}>
          <h5 className="section__header--slug">{slug}</h5>
        </If>
        <h1 className="section__header--title">{title}</h1>
        <If condition={!!description}>
          <p className="section__header--description">{description}</p>
        </If>
      </div>
      <If condition={!!button}>{button}</If>
    </div>
  );
}
