import { Button, Modal } from "..";
import { ConfirmInterface } from "@/utils/types";

export function Confirm({
  onClose,
  onConfirm,
  open,
  title,
  className,
}: ConfirmInterface) {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className={`confirm__modal ${className}`}
    >
      <div className="confirm__modal--content">
        <h1 className="confirm__modal--title">{title}</h1>
        <div className="confirm__modal--actions">
          <Button variant="secondary" onClick={onConfirm}>
            Yes
          </Button>
          <Button variant="secondary" onClick={onClose}>
            No
          </Button>
        </div>
      </div>
    </Modal>
  );
}
