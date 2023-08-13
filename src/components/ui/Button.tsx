import { doIf } from "@/utils";
import { ButtonInterface, Events } from "@/utils/types";

export function Button({
  text,
  children,
  className,
  onClick,
  variant,
}: ButtonInterface & Pick<Events, "onClick">) {
  return (
    <button className={`button ${className} ${variant}`} onClick={onClick}>
      {doIf(!!children, children, text)}
    </button>
  );
}
