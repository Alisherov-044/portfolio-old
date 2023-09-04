import { ModalInterface } from "@/utils/types";

export function Modal({ children, onClose, open, className }: ModalInterface) {
  return (
    <div
      className={`modal__wrapper ${open ? "open" : ""} ${className}`}
      onClick={onClose}
    >
      <div className="modal__container" onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
