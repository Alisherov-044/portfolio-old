import { ContainerInterface } from "@/utils/types";

export function Container({ children, sm = false }: ContainerInterface) {
  return <div className={`container ${sm ? "sm" : ""}`}>{children}</div>;
}
