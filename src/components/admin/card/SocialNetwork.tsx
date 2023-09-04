import parse from "html-react-parser";
import { SocialNetworkInterface } from "@/utils/types";
import { ActionsInterface, SocialNetworkScheme } from "@/utils/types.scheme";
import { EditIcon, TrashIcon } from "@/assets/icons";

export function SocialNetwork({
  socialNetwork,
  onDelete,
  onEdit,
}: SocialNetworkInterface & ActionsInterface<SocialNetworkScheme>) {
  const { id, icon, link } = socialNetwork;

  return (
    <div className="social__network--admin">
      <span title="id">{id}</span>
      <span title="icon">{parse(icon)}</span>
      <span title="link">{link}</span>
      <div title="actions" className="actions">
        <EditIcon className="icon edit" onClick={() => onEdit(socialNetwork)} />
        <TrashIcon className="icon delete" onClick={() => onDelete(id)} />
      </div>
    </div>
  );
}
