import Image from "next/image";
import { EditIcon, TrashIcon } from "@/assets/icons";
import { ProjectInterface } from "@/utils/types";
import { ActionsInterface, ProjectScheme } from "@/utils/types.scheme";

export function Project({
  project,
  onDelete,
  onEdit,
}: ProjectInterface & ActionsInterface<ProjectScheme>) {
  const { id, description, image, link, title } = project;

  return (
    <div className="project--admin">
      <span title="id">{id}</span>
      <span title="title">{title}</span>
      <Image src={image} width={70} height={70} alt="project image" />
      <span title="link">{link}</span>
      <p title="description">{description}</p>
      <div title="actions" className="actions">
        <EditIcon className="icon edit" onClick={() => onEdit(project)} />
        <TrashIcon className="icon delete" onClick={() => onDelete(id)} />
      </div>
    </div>
  );
}
