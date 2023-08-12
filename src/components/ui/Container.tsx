import { ContainerInterface } from "@/utils/types";

export function Container({ children }: ContainerInterface) {
  return <div className="container">{children}</div>;
}
