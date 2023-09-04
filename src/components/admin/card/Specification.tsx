import { EditIcon, TrashIcon } from "@/assets/icons";
import { SpecificationInterface } from "@/utils/types";
import { ActionsInterface, SpecificationScheme } from "@/utils/types.scheme";

export function Specification({
  specification,
  onDelete,
  onEdit,
}: SpecificationInterface & ActionsInterface<SpecificationScheme>) {
  const { id, color, description, title } = specification;

  return (
    <div className="specification--admin">
      <span title="id">{id}</span>
      <span title="color">{color}</span>
      <span title="title">{title}</span>
      <p title="description">{description}</p>
      <div title="actions" className="actions">
        <EditIcon className="icon edit" onClick={() => onEdit(specification)} />
        <TrashIcon className="icon delete" onClick={() => onDelete(id)} />
      </div>
    </div>
  );
}
