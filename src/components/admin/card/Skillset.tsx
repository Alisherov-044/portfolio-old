import parse from "html-react-parser";
import { SkillSetInterface } from "@/utils/types";
import { ActionsInterface, SkillSetScheme } from "@/utils/types.scheme";
import { EditIcon, TrashIcon } from "@/assets/icons";

export function Skillset({
  skill,
  onDelete,
  onEdit,
}: SkillSetInterface & ActionsInterface<SkillSetScheme>) {
  const { id, description, icon, title, link } = skill;

  return (
    <div className="skillset--admin">
      <span title="id">{id}</span>
      <span title="title">{title}</span>
      <span title="icon" className="icon">
        {parse(icon)}
      </span>
      <span title="link">{link}</span>
      <p title="description">{description}</p>
      <div title="actions" className="actions">
        <EditIcon className="icon edit" onClick={() => onEdit(skill)} />
        <TrashIcon className="icon delete" onClick={() => onDelete(id)} />
      </div>
    </div>
  );
}
