import { SectionHeaderInterface } from "@/utils/types";

export function SectionHeader({
  slug,
  title,
  description,
  button,
}: SectionHeaderInterface) {
  return (
    <div className="section__header">
      <div className="text__wrapper">
        {slug ? <h5 className="section__header--slug">{slug}</h5> : null}
        <h1 className="section__header--title">{title}</h1>
        {description ? (
          <p className="section__header--description">{description}</p>
        ) : null}
      </div>
      {button ? button : null}
    </div>
  );
}
